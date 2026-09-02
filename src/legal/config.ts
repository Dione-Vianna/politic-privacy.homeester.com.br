// appOrigin é o site que estes documentos regem (o app Home Care), NÃO o
// domínio onde esta página está hospedada. Por isso valor fixo — usar
// window.location.origin faria os Termos se referirem a si mesmos.
export const config = {
  appName: 'Interface Software',
  appOrigin: 'https://home-care.interfacesoftware.com.br',
  // Canal oficial de exercício dos direitos do titular (LGPD, art. 18).
  email: 'contato@interfacesoftware.com.br',
} as const;
