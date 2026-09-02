// Entry do cliente — roda APENAS no `vite dev`, para ter HMR ao mexer em
// conteúdo e estilo. No build de produção as páginas saem pré-renderizadas
// (src/prerender.tsx) e o script é removido do HTML por scripts/build.mjs,
// porque não há nada para hidratar: os documentos são estáticos.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { meta, resolveRoute } from './routes';
import './site.css';
import './legal/styles.css';

const url = window.location.pathname;

// Em produção o <title> é injetado por rota no build; aqui replicamos para o
// dev não divergir do que será publicado.
document.title = meta[resolveRoute(url)].title;

const container = document.getElementById('app');
if (!container) throw new Error('Elemento #app não encontrado no HTML.');

createRoot(container).render(
  <StrictMode>
    <App url={url} />
  </StrictMode>,
);
