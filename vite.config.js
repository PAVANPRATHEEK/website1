import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/website1/',
  build: { outDir: 'docs' },
  plugins: [react()],
})
