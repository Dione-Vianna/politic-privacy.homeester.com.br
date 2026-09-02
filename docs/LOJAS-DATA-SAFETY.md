# Correspondência: política ↔ formulários das lojas

O Google Play (*Segurança de Dados*) e a App Store (*App Privacy*) exigem uma
declaração do que o app coleta. **Ela precisa bater com a Política de
Privacidade** — divergência é motivo de rejeição na revisão da Apple e de
suspensão no Play.

Ambos estão como pendência aberta em `docs/CONFORMIDADE-LOJAS.md` do
`home-care-app` (§3.2 e §3.3). Este documento traz o preenchimento derivado do
inventário real de dados, o mesmo que está na seção 4 da política.

> Onde houver `[DEFINIR]`, a resposta depende de decisão que ainda não foi
> tomada — as mesmas marcadas como `[DEFINIR JURÍDICO]` na política.

---

## 1. Google Play — Segurança de Dados

Para cada item: **Coletado** (sai do dispositivo), **Compartilhado** (vai a
terceiro), finalidade, e se é obrigatório.

| Categoria Play | Item | Coletado | Compartilhado | Finalidade | Obrigatório |
|---|---|---|---|---|---|
| Informações pessoais | Nome | ✅ | ✅¹ | Funcionalidade do app; gestão de conta | Sim |
| Informações pessoais | E-mail | ✅ | ✅¹ | Gestão de conta | Sim |
| Informações pessoais | Telefone | ✅ | ✅¹ | Funcionalidade do app | Sim |
| Informações pessoais | Endereço | ✅ | ✅¹ | Funcionalidade do app | Sim |
| Informações pessoais | IDs do usuário | ✅ | ✅¹ | Gestão de conta | Sim |
| Informações pessoais | Outras (CPF, nascimento, gênero) | ✅ | ✅¹ | Funcionalidade do app | Sim |
| **Saúde e fitness** | **Informações de saúde** | ✅ | ✅¹ | Funcionalidade do app | Sim |
| Local | **Local preciso** | ✅ | ✅¹ | Funcionalidade do app (check-in) | Sim |
| Fotos e vídeos | Fotos | ✅ | ✅¹ | Funcionalidade do app (perfil) | Não |
| Arquivos e docs | Arquivos e documentos | ✅ | ✅¹ | Funcionalidade do app (anexos) | Não |
| Atividade no app | Interações | ✅ | ❌ | Análise e funcionamento | Sim |
| IDs de dispositivo | ID de dispositivo | ✅ | ✅² | Notificações push | Sim |

¹ Compartilhado com a empresa contratante do atendimento e com a AWS
(operadora). Não é venda nem uso publicitário.
² Compartilhado com o OneSignal, apenas o identificador de notificação.

**Respostas às perguntas de segurança:**

| Pergunta | Resposta |
|---|---|
| Dados criptografados em trânsito? | **Sim** — HTTPS/TLS |
| Usuário pode pedir exclusão? | **Sim** — via `contato@interfacesoftware.com.br` |
| Coleta ID de publicidade? | **Não** — `AD_ID` ausente do manifesto (verificado no binário, §2.8) |
| Dados usados para rastreamento? | **Não** |
| App é destinado a crianças? | **Não** |

> **Atenção ao item "Informações de saúde".** Marcá-lo dispara verificações
> adicionais do Play, e a descrição precisa deixar claro que os registros são
> inseridos por profissional de saúde durante atendimento — não são dados que o
> usuário informa sobre si por vontade própria.

---

## 2. App Store — App Privacy (nutrition label)

A Apple divide em três blocos. Aqui **nada** vai para "Data Used to Track You".

### Data Linked to You

| Categoria Apple | Tipo | Finalidade |
|---|---|---|
| Contact Info | Name, Email Address, Phone Number, Physical Address | App Functionality |
| **Health & Fitness** | **Health** | App Functionality |
| Location | **Precise Location** | App Functionality |
| User Content | Photos or Videos, Other User Content | App Functionality |
| Identifiers | User ID, Device ID | App Functionality |
| Sensitive Info | CPF, data de nascimento, gênero | App Functionality |

### Data Not Linked to You

| Categoria Apple | Tipo | Finalidade |
|---|---|---|
| Diagnostics | Crash Data, Performance Data | App Functionality |

### Data Used to Track You

Nenhum. O app não usa identificador de publicidade nem SDK de rastreamento, e
não pede permissão de *App Tracking Transparency*.

---

## 3. O que o revisor vai perguntar

| Pergunta provável | Resposta |
|---|---|
| Por que o app usa GPS? | Confirmar que o cuidador está no endereço do atendimento no momento do check-in. Só em primeiro plano, só nesse momento |
| Por que coleta dados de saúde? | São registros de evolução de enfermagem, inseridos pelo profissional durante o atendimento domiciliar |
| Quem tem acesso? | O profissional designado e a empresa contratante. Não há acesso público nem uso secundário |
| Conta de teste | `[DEFINIR]` — obrigatório: app com login exige credenciais nas notas da revisão |
| URL da política | `https://politic-privacy.homeester.com.br/politica-de-privacidade/` |

---

## 4. Antes de submeter

- [ ] Resolver os `[DEFINIR JURÍDICO]` da política — a URL fica pública para o revisor
- [ ] Preencher Segurança de Dados no Play com a tabela §1
- [ ] Preencher App Privacy no App Store Connect com a tabela §2
- [ ] Conferir que as duas declarações batem entre si e com a política
- [ ] Criar conta de teste e incluir nas notas da revisão
- [ ] Cadastrar a URL da política nos dois consoles
