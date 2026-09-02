export const routes = {
  home: '/',
  privacy: '/politica-de-privacidade/',
  terms: '/termos-de-servico/',
} as const;

export type Route = (typeof routes)[keyof typeof routes];

/** Normaliza a URL (query, hash, barra final) para uma das rotas conhecidas. */
export function resolveRoute(url: string): Route {
  const path = url.split(/[?#]/)[0].replace(/\/*$/, '/');
  if (path.startsWith(routes.privacy)) return routes.privacy;
  if (path.startsWith(routes.terms)) return routes.terms;
  return routes.home;
}

export const meta: Record<Route, { title: string; description: string }> = {
  [routes.home]: {
    title: 'Documentos legais — Home Care',
    description:
      'Política de Privacidade e Termos de Serviço do aplicativo Home Care.',
  },
  [routes.privacy]: {
    title: 'Política de Privacidade — Home Care',
    description:
      'Quais dados pessoais o Home Care coleta, com que finalidade, com quem são compartilhados e como exercer seus direitos como titular.',
  },
  [routes.terms]: {
    title: 'Termos de Serviço — Home Care',
    description:
      'Regras de uso do aplicativo Home Care, limitações de responsabilidade e propriedade intelectual.',
  },
};
