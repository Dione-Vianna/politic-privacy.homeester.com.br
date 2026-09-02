// appName é a plataforma, e é assim que aparece nos textos legais.
// "Home Care" nomeia o tipo de serviço que a plataforma atende — por isso a
// seção de abertura define expressamente que, nestes documentos, o termo se
// refere ao sistema, e não ao atendimento domiciliar em si.
//
// appOrigin é o site regido pelos documentos, não o domínio onde esta página
// está hospedada. Valor fixo de propósito: window.location.origin faria os
// Termos se referirem a si mesmos.
export const config = {
  appName: 'Home Care',
  appOrigin: 'https://systemhomeester.com.br',
  developer: 'Interface Software',
  email: 'contato@interfacesoftware.com.br',
} as const;

/** Operador (art. 5º, VII): desenvolve e opera a plataforma. */
export const operador = {
  nome: 'Interface Software',
  razaoSocial: 'INTERFACE SISTEMAS COMERCIAIS DE TERESÓPOLIS LTDA',
  cnpj: '11.308.874/0001-27',
  endereco: 'Rua Feliciano Sodré, 1083, sala 909 — Várzea',
  cidade: 'Teresópolis/RJ — CEP 25963-025',
} as const;

/**
 * Controladora (art. 5º, VI): a empresa que presta o atendimento ao paciente.
 * Hoje há uma só. Havendo outras, cada titular tem como controladora a empresa
 * que presta o seu próprio atendimento — ver seção 1.1 da Política.
 */
export const controladora = {
  razaoSocial: 'HOME ESTER SAÚDE DOMICILIAR LTDA',
  encarregado: 'Ester Rita Nunes — Sócia-Administradora',
  cnpj: '42.456.578/0001-05',
  endereco: 'Rua Heitor de Moura Estevão, 208 — Várzea',
  cidade: 'Teresópolis/RJ — CEP 25953-090',
} as const;
