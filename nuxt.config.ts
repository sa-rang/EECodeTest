// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
  ],
  elementPlus: {
    icon: 'ElIcon',
    injectionID: { prefix: 1024, current: 0 },
    themes: ['dark'],
  }
})
