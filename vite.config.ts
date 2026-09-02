import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// O build de produção não é o `vite build` puro: scripts/build.mjs roda este
// config para gerar o template + CSS e depois pré-renderiza cada rota para
// HTML estático. Este arquivo serve tanto ao `vite dev` quanto a esse passo.
export default defineConfig({
  plugins: [react()],
});
