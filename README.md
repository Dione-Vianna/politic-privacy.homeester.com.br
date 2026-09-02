# politic-privacy.homeester.com.br

Política de Privacidade e Termos de Serviço do **Home Care**, publicados como
site estático em `https://politic-privacy.homeester.com.br`.

## Como funciona

As páginas são escritas como componentes React, mas **o site publicado não tem
JavaScript**. O build renderiza cada rota para HTML completo e descarta o
bundle do cliente — são documentos legais sem nenhuma interatividade, que
precisam abrir para crawler, revisor de loja de app e usuário sem JS.

Resultado: ~44 KB no total, três páginas, zero requisições de script.

| Rota | Componente |
|---|---|
| `/` | `src/Home.tsx` |
| `/politica-de-privacidade/` | `src/legal/Privacy.tsx` |
| `/termos-de-servico/` | `src/legal/Terms.tsx` |

`src/routes.ts` é a fonte única das rotas e dos metadados (`<title>`,
`description`) — o build descobre as páginas a gerar a partir dele.

## Desenvolvimento

```bash
npm install
npm run dev       # HMR em http://localhost:5173
npm run build     # type-check + pré-renderização -> dist/
npm run preview   # serve o dist/ como em produção
```

`src/main.tsx` existe **apenas** para o `npm run dev` ter HMR. Ele é removido
do HTML no build; nada é hidratado em produção.

## Build

`scripts/build.mjs` faz quatro passos:

1. build de cliente → `dist/index.html` (template) + CSS com hash;
2. build SSR → `.ssr/prerender.js`, os componentes compilados para Node;
3. renderiza cada rota dentro do template e grava `dist/<rota>/index.html`;
4. apaga o JS, que ficaria sem uso.

> Foi avaliado o `vite-prerender-plugin` para esse papel. Ele funciona, mas no
> Vite 8 o processo do build não encerra — o `vite build` imprime o resultado e
> fica pendurado, o que travaria o job de CI. Como as rotas são conhecidas e
> fixas, o crawler dele não era necessário.

## Deploy

Push na `main` dispara `.github/workflows/deploy.yml`: build, `s3 sync` em duas
passadas (assets com cache imutável, HTML revalidando sempre) e invalidação do
CloudFront.

Secrets necessários em *Settings > Secrets and variables > Actions*:

| Secret | Valor |
|---|---|
| `AWS_ACCESS_KEY_ID` | usuário IAM de deploy |
| `AWS_SECRET_ACCESS_KEY` | idem |
| `AWS_S3_BUCKET` | `politic-privacy.homeester.com.br` |
| `CLOUDFRONT_DISTRIBUTION_ID` | ID da distribuição |

A infraestrutura e as políticas IAM estão em [PLANO.md](./PLANO.md) e [aws/](./aws).

## Conteúdo

O texto dos documentos vive em `src/legal/`. `src/legal/config.ts` centraliza
nome da empresa, site regido pelos documentos e e-mail de contato.

⚠️ **Pendências antes de publicar** — ver seção 3 do [PLANO.md](./PLANO.md):
confirmação do e-mail de contato e revisão LGPD para tratamento de dado
sensível de saúde (art. 11).
