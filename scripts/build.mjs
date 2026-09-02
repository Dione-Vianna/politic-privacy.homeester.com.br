// Build de produção.
//
// As páginas são documentos legais estáticos: precisam abrir para crawler,
// revisor de loja de app e usuário sem JavaScript. Então o build renderiza
// cada rota para HTML completo e NÃO publica bundle de cliente — só CSS.
//
//   1. build de cliente  -> dist/index.html (template) + CSS
//   2. build SSR         -> .ssr/prerender.js (componentes compilados p/ Node)
//   3. renderiza cada rota no template e grava dist/<rota>/index.html
//   4. remove o JS, que ficaria sem uso
//
// O <script> é removido do HTML final; o entry src/main.tsx existe só para o
// `vite dev` ter HMR.

import { readFile, writeFile, mkdir, rm, readdir } from 'node:fs/promises';
import path from 'node:path';
import { build } from 'vite';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, '.ssr');

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// 1. Template + CSS
await build({ root, logLevel: 'warn' });

// 2. Componentes compilados para Node
await build({
  root,
  logLevel: 'warn',
  build: {
    ssr: path.join(root, 'src/prerender.tsx'),
    outDir: '.ssr',
    emptyOutDir: true,
  },
});

const { prerender, routes } = await import(path.join(ssrDir, 'prerender.js'));

const template = await readFile(path.join(dist, 'index.html'), 'utf8');

if (!template.includes('<div id="app"></div>')) {
  throw new Error('Template sem <div id="app"></div> — index.html mudou?');
}

const pages = Object.values(routes);

for (const url of pages) {
  const { html, title, description } = prerender(url);

  const document = template
    // remove o bundle do cliente: nada para hidratar
    .replace(/\s*<script\b[^>]*\btype="module"[^>]*><\/script>/g, '')
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(
      '</head>',
      `  <meta name="description" content="${escapeHtml(description)}">\n` +
        `    <link rel="canonical" href="https://politic-privacy.homeester.com.br${url}">\n` +
        `  </head>`,
    )
    .replace('<div id="app"></div>', `<div id="app">${html}</div>`);

  const outFile =
    url === '/'
      ? path.join(dist, 'index.html')
      : path.join(dist, url.replace(/^\/|\/$/g, ''), 'index.html');

  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, document);
}

// 4. Limpeza: JS e sourcemaps não são publicados
const assetsDir = path.join(dist, 'assets');
for (const file of await readdir(assetsDir)) {
  if (/\.(js|map)$/.test(file)) await rm(path.join(assetsDir, file));
}
await rm(ssrDir, { recursive: true, force: true });

console.log(`\nPré-renderizadas ${pages.length} páginas sem JavaScript:`);
for (const url of pages) console.log(`  ${url}`);
