// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  plugins: [
    "~/plugins/firebase.js",
    "~/plugins/persistedState.client.ts"
  ],
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true },
  typescript: {
    typeCheck: false,
    strict: false
  }
})
