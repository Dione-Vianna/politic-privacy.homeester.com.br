# Plano — Site de Política de Privacidade e Termos de Serviço (Home Care)

**Domínio alvo:** `politic-privacy.homeester.com.br`
**Repositório:** `Dione-Vianna/politic-privacy.homeester.com.br`
**Bucket S3:** `politic-privacy.homeester.com.br` (`us-east-1`, Static Website Hosting)
**Atualizado:** 01/09/2026

---

## 1. Situação

| Item | Situação |
|---|---|
| Projeto (Vite + React + TS) | ✅ Feito — build validado, 3 páginas, 44 KB |
| Conteúdo legal | ✅ Reaproveitado de `src/legal/` |
| Workflow de deploy | ✅ `.github/workflows/deploy.yml` |
| Políticas IAM | ✅ `aws/` — `policy-setup` no `cli-access`, `policy-deploy-politic-privacy` no usuário de deploy |
| Zona DNS `homeester.com.br` | ✅ No Route 53, nesta mesma conta |
| Bucket S3 | ✅ Website hosting, Block Public Access ajustado, policy aplicada, site publicado e testado no endpoint HTTP |
| Usuário de deploy | ✅ `deploy-gitaction-politic-privacy` criado, com access key |
| Certificado ACM | ✅ `ISSUED` em `us-east-1`, validação DNS automática |
| CloudFront | ✅ `E7NGK49DOUXBB` — `dk6r3z3e6re2p.cloudfront.net` |
| Registro DNS do subdomínio | ✅ A + AAAA alias na zona `homeester.com.br` |
| Secrets no GitHub | ✅ 4 secrets configurados, pipeline validado em produção |
| Revisão LGPD do conteúdo | ⬜ |

---

## 2. Arquitetura

### 2.1 O site

Vite 8 + React 19 + TypeScript 7. As páginas são componentes React, mas **o
site publicado não tem JavaScript**: o build renderiza cada rota para HTML
completo e descarta o bundle do cliente.

Motivo: são documentos legais sem nenhuma interatividade, que precisam abrir
para crawler, revisor de loja de app e usuário sem JS. Servir um `<div>` vazio
que só vira texto depois de baixar 68 KB de React seria pior em todos os
critérios que importam aqui.

| Rota | Arquivo publicado |
|---|---|
| `/` | `index.html` |
| `/politica-de-privacidade/` | `politica-de-privacidade/index.html` |
| `/termos-de-servico/` | `termos-de-servico/index.html` |

Cada rota é um diretório com seu `index.html` — o endpoint de website do S3
resolve isso nativamente, sem redirecionamento nem regra extra.

Detalhes de build em [README.md](./README.md).

### 2.2 Hospedagem — Static Website Hosting

Escolhido o endpoint de **website** do S3 (e não origem REST + OAC).

Isso resolve de saída o problema do ponto no nome do bucket: `politic-privacy.homeester.com.br`
tem pontos, e o certificado curinga `*.s3.us-east-1.amazonaws.com` não cobre
nomes com pontos adicionais — origem REST com HTTPS quebraria o TLS entre
CloudFront e S3. O endpoint de website é acessado por HTTP, então a questão
não existe.

Consequências:

- O bucket precisa ser **público para leitura** (`s3:GetObject` para `*`).
  Não há OAC. Isso é aceitável: todo o conteúdo é público por definição.
- No CloudFront a origem é **custom origin**, não origem S3:
  `politic-privacy.homeester.com.br.s3-website-us-east-1.amazonaws.com`,
  com **Origin Protocol Policy = HTTP Only**.
- O usuário final continua em HTTPS — o CloudFront termina o TLS.
- Resolução de `index.html` em subdiretório vem de graça.

### 2.3 Regiões

- **Bucket S3:** `us-east-1` — é onde o bucket já existe, e onde estão a
  hosted zone e a distribuição do `systemhomeester.com.br` nesta conta.
- **Certificado ACM:** `us-east-1` — **obrigatório**. CloudFront só aceita
  certificado de N. Virgínia; um emitido em outra região sequer aparece na
  lista da distribuição. Aqui coincide com a região do bucket, então basta não
  trocar de região no meio do caminho.

---

## 3. Pendências de conteúdo

1. ✅ **`config.ts` corrigido.** Usava `window.location.origin`, o que faria os
   Termos se referirem a si mesmos. Agora aponta fixo para
   `https://home-care.interfacesoftware.com.br`.

2. ✅ **E-mail de contato definido.** `src/legal/config.ts` agora usa
   `contato@interfacesoftware.com.br` — o canal oficial de exercício dos
   direitos do titular.

3. ⬜ **LGPD e dado sensível de saúde.** Home care trata **dado pessoal
   sensível** (art. 11). A política atual é genérica e não cobre: base legal
   específica para dado de saúde, identificação do Encarregado/DPO, prazo de
   retenção, canal de exercício dos direitos (art. 18) e compartilhamento com
   profissionais de saúde. Recomendo revisão jurídica antes de publicar.

---

## 4. Acessos AWS

Dois perfis distintos — não use o mesmo usuário para os dois.

### 4.1 Usuário de SETUP (você, uso pontual)

[`aws/policy-setup.json`](./aws/policy-setup.json)

| Serviço | Para quê |
|---|---|
| S3 | configurar website hosting, public access block, bucket policy |
| CloudFront | criar distribuição e invalidations |
| ACM | pedir certificado em `us-east-1` |
| Route 53 | CNAME de validação + registro A/Alias |
| IAM | criar o usuário de deploy e a access key |

> Se preferir, `AdministratorAccess` temporário resolve e você remove depois.

### 4.2 Usuário de DEPLOY (GitHub Actions, permanente)

[`aws/policy-deploy.json`](./aws/policy-deploy.json) — least privilege:

```
s3:ListBucket, s3:GetBucketLocation  → arn:aws:s3:::politic-privacy.homeester.com.br
s3:GetObject/PutObject/DeleteObject  → .../*
cloudfront:CreateInvalidation        → arn da distribuição
cloudfront:GetInvalidation           → arn da distribuição
```

Nome sugerido: `github-actions-politic-privacy-deploy`.
**Sem acesso ao console**, somente access key.

> **Hardening opcional:** trocar a access key por **OIDC**
> (`aws-actions/configure-aws-credentials` com `role-to-assume`), eliminando o
> segredo estático no GitHub. Melhoria, não bloqueio.

---

## 5. Passo a passo

### Fase 0 — Pré-requisitos

```bash
aws login
aws sts get-caller-identity
aws route53 list-hosted-zones-by-name --dns-name homeester.com.br
```

- [ ] Confirmar que a hosted zone de `homeester.com.br` está **na mesma conta**
      do bucket. Se estiver em outra, o registro DNS é criado na conta que
      detém a zona.
- [ ] Anotar o `HostedZoneId`.

### Fase 1 — IAM

1. Criar policy `PoliticPrivacySetup` a partir de `aws/policy-setup.json`
   (pular se for usar admin).
2. Criar policy `PoliticPrivacyDeploy` a partir de `aws/policy-deploy.json`.
3. Criar usuário `github-actions-politic-privacy-deploy`, sem console access,
   anexar `PoliticPrivacyDeploy`.
4. Gerar access key.

> O ARN da distribuição ainda não existe agora. Crie a policy de deploy com
> `"Resource": "*"` no bloco do CloudFront e **volte na Fase 4** para
> restringir ao ARN real.

### Fase 2 — S3

```bash
BUCKET=politic-privacy.homeester.com.br

# Website hosting + redirects das URLs curtas
aws s3api put-bucket-website \
  --bucket "$BUCKET" \
  --website-configuration file://aws/website-config.json

# Leitura pública (necessária no modo website — não há OAC)
aws s3api put-public-access-block \
  --bucket "$BUCKET" \
  --public-access-block-configuration \
    "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=false,RestrictPublicBuckets=false"

aws s3api put-bucket-policy \
  --bucket "$BUCKET" \
  --policy file://aws/bucket-policy-public-read.json
```

`aws/website-config.json` também traz as regras de redirect `301` de
`/privacy` → `/politica-de-privacidade/` e `/terms` → `/termos-de-servico/`,
para links antigos.

- [ ] Testar o endpoint HTTP direto antes de seguir:
      `http://politic-privacy.homeester.com.br.s3-website-us-east-1.amazonaws.com`

### Fase 3 — Certificado ACM (`us-east-1`)

```bash
aws acm request-certificate \
  --domain-name politic-privacy.homeester.com.br \
  --validation-method DNS \
  --region us-east-1

aws acm describe-certificate --certificate-arn <ARN> --region us-east-1 \
  --query 'Certificate.DomainValidationOptions[0].ResourceRecord'
```

- [ ] Criar o CNAME de validação na zona `homeester.com.br`.
- [ ] Aguardar status `ISSUED`.

> Se pretende publicar mais subdomínios de `homeester.com.br`, considere emitir
> `*.homeester.com.br` agora e evitar repetir o processo.

### Fase 4 — CloudFront

> **Já existe um modelo pronto nesta conta:** a distribuição de
> `systemhomeester.com.br` usa exatamente este padrão — origem no endpoint de
> website, `http-only`, `redirect-to-https`, `PriceClass_All`, `TLSv1.2_2021`,
> sem custom error responses. Copie a configuração dela.

Criar a distribuição com:

- **Origin domain:** `politic-privacy.homeester.com.br.s3-website-us-east-1.amazonaws.com`
  — digite o endereço à mão; **não** selecione o bucket na lista de origens S3,
  senão o console configura origem REST e o TLS quebra pelo ponto no nome.
- **Origin protocol policy:** `HTTP Only`
- **Alternate domain name (CNAME):** `politic-privacy.homeester.com.br`
- **Custom SSL certificate:** o ARN da Fase 3
- **Viewer protocol policy:** `Redirect HTTP to HTTPS`
- **Default root object:** `index.html`
- **Cache policy:** `CachingOptimized`
- **Compress objects automatically:** ligado
- **Price class:** `All` — inclui POP no Brasil; a diferença de latência para
  o público local é real e o volume aqui é irrisório.

> **Não** configure custom error responses de `403/404 → /index.html`. Isso é
> para SPA; aqui mascararia página inexistente como se existisse.

- [ ] Anotar `DistributionId` e o domínio `dXXXX.cloudfront.net`.
- [ ] Voltar na policy de deploy e trocar o `"Resource": "*"` do CloudFront
      pelo ARN real.

### Fase 5 — Route 53

```json
{
  "Changes": [{
    "Action": "UPSERT",
    "ResourceRecordSet": {
      "Name": "politic-privacy.homeester.com.br",
      "Type": "A",
      "AliasTarget": {
        "HostedZoneId": "Z2FDTNDATAQYW2",
        "DNSName": "dXXXXXXXXXXXX.cloudfront.net",
        "EvaluateTargetHealth": false
      }
    }
  }]
}
```

> `Z2FDTNDATAQYW2` é o hosted zone ID global e fixo do CloudFront — é sempre
> esse valor, não o ID da sua zona.

- [ ] Opcional: registro `AAAA` idêntico, para IPv6.

### Fase 6 — CI/CD

Secrets em *Settings > Secrets and variables > Actions*:

| Secret | Valor |
|---|---|
| `AWS_ACCESS_KEY_ID` | access key do usuário de deploy |
| `AWS_SECRET_ACCESS_KEY` | secret do usuário de deploy |
| `AWS_S3_BUCKET` | `politic-privacy.homeester.com.br` |
| `CLOUDFRONT_DISTRIBUTION_ID` | ID da Fase 4 |

- [ ] `git push` na `main` e acompanhar o job.

### Fase 7 — Validação

- [ ] `https://politic-privacy.homeester.com.br/` responde 200
- [ ] `/politica-de-privacidade/` e `/termos-de-servico/` abrem
- [ ] `/privacy` e `/terms` redirecionam com 301
- [ ] `http://` redireciona para `https://`
- [ ] Cadeado válido, sem *mixed content*
- [ ] `curl -I` mostra `x-cache: Hit from cloudfront` na segunda chamada
- [ ] Página abre com JavaScript desativado (deve abrir — não há JS)
- [ ] Uma correção de texto aparece em produção após o deploy
- [ ] Linkar os dois documentos no app Home Care e nas lojas de app

---

## 6. Ordem de execução

```
0. aws login + confirmar conta/hosted zone
1. IAM: policies + usuário de deploy + access key
2. S3: website hosting + bucket policy       ⟶ testável isolado no endpoint HTTP
3. ACM em us-east-1 + validação DNS          ⟵ dispare cedo, é o passo lento
4. CloudFront (custom origin, HTTP Only)
5. Route 53: A/Alias
6. Secrets + push na main
7. Validação + revisão jurídica
```

Caminho crítico: **3 → 4 → 5**.

---

## 7. Custo estimado

| Recurso | Estimativa |
|---|---|
| S3 (44 KB, tráfego baixo) | < US$ 0,05/mês |
| CloudFront | coberto pelo free tier |
| ACM | gratuito |
| Route 53 (zona já existe) | US$ 0 adicional |
| **Total** | **≈ US$ 0–1/mês** |

---

## 8. Armadilhas

| Risco | Mitigação |
|---|---|
| Ponto no nome do bucket quebra TLS na origem REST | Resolvido: website hosting + custom origin HTTP Only (§2.2) |
| Console configurar origem S3 em vez de custom | Digitar o endpoint `s3-website-...` à mão na Fase 4 |
| Certificado fora de `us-east-1` | Não aparece na distribuição. Sempre `--region us-east-1` |
| Custom error response 403/404 → index.html | Não usar: é padrão de SPA, aqui esconderia 404 real |
| HTML cacheado demais | Workflow publica HTML com `max-age=0,must-revalidate` |
| Deploy sem invalidation | Passo obrigatório no workflow |
| Hosted zone em outra conta AWS | Confirmar na Fase 0 |
| Bucket público por engano em outro bucket | A policy de leitura pública nomeia só este bucket |
| Access key de longa duração no GitHub | Rotacionar, ou migrar para OIDC |
| Política genérica para dado de saúde | Revisão jurídica LGPD art. 11 antes de publicar |
