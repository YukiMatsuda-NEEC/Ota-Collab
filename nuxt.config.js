export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ota-collab",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~/assets/scss/_global.scss" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/firebase.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/dotenv"
  ],
  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'https://api-tau-tawny.vercel.app/api'
    baseURL: "https://api-rose-beta.vercel.app/api",
    browserBaseURL: "https://api-rose-beta.vercel.app/api",
    proxy: true
  },

  proxy: {
    "/api/": {
      target: "https://api-rose-beta.vercel.app"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
