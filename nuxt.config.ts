import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  extends: ['nuxt-seo-kit', '@sidebase/core'],
  runtimeConfig: {
    version: '0.0.1',
    indexable: true,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://chatino.leamsigc.com',
      siteName: 'Chatino resources ',
      siteDescription: 'Discover the most popular Chatino Language podcasts and immerse yourself in the world of Chatino Language and culture.',
      language: 'en' // prefer more explicit language codes like `en-AU` over `en`
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    '@huntersofbook/naive-ui-nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@unlighthouse/nuxt',
    'nuxt-schema-org',
    '@nuxt/image-edge',
    // 'nuxt-security',
    '@nuxt/devtools'

  ],
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
  linkChecker: {
    failOn404: true
  },
  schemaOrg: {
    // set to your production domain
    host: 'https://chatino.leamsigc.com',
    canonicalHost: 'https://chatino.leamsigc.com'
  }
})
