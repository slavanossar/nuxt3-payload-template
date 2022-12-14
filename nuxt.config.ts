import possibleTypes from './graphql/possibleTypes.json'

const isDev = process.env.NODE_ENV !== 'production'

export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: [],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/apollo',
    '@vue-macros/nuxt',
    '@vueuse/nuxt',
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.SERVER_URL}/api/graphql`,
        inMemoryCacheOptions: { possibleTypes },
        connectToDevTools: isDev,
      },
    },
  },
  runtimeConfig: {
    public: {
      serverUrl: process.env.SERVER_URL,
    },
  },
  experimental: {
    reactivityTransform: true,
  },
})
