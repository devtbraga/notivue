import { getHead } from './utils/head'

import nesting from 'postcss-nesting'

export default defineNuxtConfig({
   modules: ['floating-vue/nuxt'],
   ssr: true,
   devtools: {
      enabled: true,
   },
   app: {
      head: getHead(),
   },
   vite: {
      css: {
         postcss: {
            plugins: [nesting],
         },
      },
   },
   css: ['assets/style.css', 'notivue/notifications.css', 'notivue/animations.css'],
})
