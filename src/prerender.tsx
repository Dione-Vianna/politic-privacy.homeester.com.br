import { renderToStaticMarkup } from 'react-dom/server';
import { App } from './App';
import { meta, resolveRoute } from './routes';

/**
 * Renderiza uma rota para HTML estático. Chamado por scripts/build.mjs em
 * tempo de build, uma vez por rota — nunca no navegador.
 */
export function prerender(url: string) {
  const { title, description } = meta[resolveRoute(url)];

  return {
    html: renderToStaticMarkup(<App url={url} />),
    title,
    description,
  };
}

// Reexportado para que scripts/build.mjs descubra as rotas a gerar sem
// manter uma segunda lista.
export { routes } from './routes';
