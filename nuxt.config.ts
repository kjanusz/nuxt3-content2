import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // static HTML generation (SSG)
  ssr: true,
  target: "static",
  // add router base configuration for github pages
  router: {
    base:'/nuxt3-content2/',
  },
  modules: ['@nuxt/content'],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
})
