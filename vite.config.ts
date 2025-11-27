import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mon-portfolio/", // Remplacez 'mon-portfolio' par le nom EXACT de votre futur dépôt GitHub
})




