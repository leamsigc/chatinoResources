import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  runtimeConfig: {
    version: '0.0.1',
    public: { siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://giessen.dev' }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@huntersofbook/naive-ui-nuxt', '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@unlighthouse/nuxt',
    'nuxt-schema-org',
    '@nuxt/image-edge'

  ],
  extends: ['@sidebase/core'],
  typescript: {
    shim: false
  },
  colorMode: {
    classSuffix: ''
  },
  unocss: {
    attributify: true,
    icons: true,
    components: false
  },
  content: {
    // documentDriven: {
    //   layoutFallbacks: ['default'],
    //   navigation: true,
    //   page: true,
    //   surround: true,
    //   injectPage: true,
    // },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        white: 'github-light', // Theme used if `html.dark`
        dark: 'github-dark', // Theme used if `html.sepia`
        default: 'monokai'
      },
      preload: ['tsx', 'json', 'sh', 'js']
    },
    navigation: {
      fields: ['navLabel']
    }
    // watch: {
    //   ws: { port: 4000, showUrl: true },
    // },
    // locales: ['en', 'es'],
    // defaultLocale: 'en',
    // sources: ['content', {
    //   name: 'es',
    //   prefix: '/es',
    //   // All contents inside this source will be prefixed with `/fa`
    //   driver: 'fs', // ...driverOptions
    //   base: resolve(__dirname, 'content-es'), // Path for source directory
    // },
    // {
    //   name: 'en',
    //   prefix: '',
    //   // All contents inside this source will be prefixed with `/fa`
    //   driver: 'fs', // ...driverOptions
    //   base: resolve(__dirname, 'content'), // Path for source directory
    // }
    // ],
  },
  unlighthouse: {
    scanner: {
      // simulate a desktop device
      device: 'mobile'
    }

  },
  schemaOrg: {
    // set to your production domain
    host: 'https://giessen.dev',
    canonicalHost: 'https://giessen.dev'
  }
})
