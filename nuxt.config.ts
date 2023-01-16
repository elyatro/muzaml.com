// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head :{
      meta: [
        // {meta name="viewport" content="width=device-width, initial-scale=1"}
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name:"msapplication-TileColor", content:"#da532c"},
        { name:"theme-color", content:"#22223b"}
      ],
      script: [
        // {script src="https://myawesome-lib.js"}{/script}
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // {link rel="stylesheet" href="https://myawesome-lib.css"}
        { rel:"stylesheet", href:"https://cdn.jsdelivr.net/gh/esaturn/flaticon-uicons@V2.1.1/uicons.css" },
        { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap" },
        { rel:"apple-touch-icon", sizes:"120x120", href:"/apple-touch-icon.png"},
        { rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
        { rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
        { rel:"manifest", href:"/site.webmanifest"},
        { rel:"mask-icon", href:"/safari-pinned-tab.svg", color:"#5bbad5"},
      ],
    },
    buildAssetsDir: 'nuxt',
  },
  css: [
    // '@/assets/css/index.css',
    // '@/assets/css/blog.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  // image: {
  //   provider: 'static',
  //   dir: 'assets/img'
  // },
  // ssr: false,
  // content: {
  //   experimental: {
  //     clientDB: true
  //   }
  // }
})