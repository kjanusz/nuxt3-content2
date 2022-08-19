import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // 1) static hosting SSG - npm generate, preview
  ssr: true, // ssr:true is default
  // 2) static hosting SPA - npm build
  //ssr: false,
  // 3) SSR - npm build
  //ssr: true,
  // modify baseURL for github pages
  app: {
    baseURL:'/nuxt3-content2/',
  },
  modules: ['@nuxt/content'],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
})
