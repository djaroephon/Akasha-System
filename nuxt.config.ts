// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
   vite: {
    server:{
      hmr:{port: 64999}
    },
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      title: 'Akasha Terminal', 
      titleTemplate: '%s - Akasha Terminal',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Genshin Impact Resource Planner & Database' }
      ],
    }
  }
})
