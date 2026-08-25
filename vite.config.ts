import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { prerenderLocales } from './vite/prerender-locales.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prerenderLocales()],
  base: '/',
})
