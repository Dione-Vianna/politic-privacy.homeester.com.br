// appName é quem OPERA o serviço regido por estes documentos, e é assim que
// aparece nos textos legais ("serviços fornecidos por...", "Nós, ...").
// O Home Care é uma empresa distinta da Interface Software.
//
// appOrigin é o site regido pelos documentos — não o domínio onde esta página
// está hospedada. Valor fixo de propósito: window.location.origin faria os
// Termos se referirem a si mesmos.
//
// developer e email são apenas o crédito de quem desenvolve e o canal de
// contato provisório, enquanto o Home Care não tem um próprio.
export const config = {
  appName: 'Home Care',
  appOrigin: 'https://systemhomeester.com.br',
  developer: 'Interface Software',
  email: 'contato@interfacesoftware.com.br',
} as const;
