// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    auth: {
      name: 'local-auth'
    }
  },
  nitro:{
    experimental:{
      openAPI:true
    }
  }
})
