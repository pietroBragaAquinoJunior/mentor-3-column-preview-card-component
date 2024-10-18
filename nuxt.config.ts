import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  runtimeConfig: {
    version: '0.0.1'
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@huntersofbook/naive-ui-nuxt'],
  extends: ['@sidebase/core'],
  typescript: {
    shim: false
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Frontend Mentor | 3-column preview card component',
      link: [
        { rel: 'icon', type: '/images/favicon-32x32.png', href: '/images/favicon-32x32.png' }
      ]
    }
  },
  css: [
    '@/assets/css/global.css'
  ]
})
