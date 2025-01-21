import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    baseURL: 'https://portfolionurdjedd.com/urbanstyle',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: ['~/plugins/cart.js'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    resolve: {
      alias: {
        '#app-manifest': '/node_modules/nuxt/dist/app/composables/manifest.js',
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

})
