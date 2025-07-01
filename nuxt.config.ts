// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  future: {
    compatibilityVersion: 4
  },
  app: {
    buildAssetsDir: "assets",
    // head: {
    //   link: [
    //     // Preload your most critical font weights first
    //     {
    //       rel: 'preload',
    //       href: 'https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnPKreRhf6.woff2', // Fira Sans 400 latin
    //       as: 'font',
    //       type: 'font/woff2',
    //       crossorigin: ''
    //     },
    //     {
    //       rel: 'preload',
    //       href: 'https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnPKreSBf6TF0.woff2', // Fira Sans 300 latin
    //       as: 'font',
    //       type: 'font/woff2',
    //       crossorigin: ''
    //     },
    //     {
    //       rel: 'preload',
    //       href: 'https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKveRhf6.woff2', // Fira Sans 500 latin
    //       as: 'font',
    //       type: 'font/woff2',
    //       crossorigin: ''
    //     },
    //     {
    //       rel: 'preload',
    //       href: 'https://fonts.gstatic.com/s/notoseriftamil/v30/LYjUdHr-klIgTfc40komjQ5OObazYp-6H94dBF-RX6nNRL3u0JY.woff2', // Noto Serif Tamil 400 latin
    //       as: 'font',
    //       type: 'font/woff2',
    //       crossorigin: ''
    //     }
    //   ]
    // }
  },
  css: ['./assets/css/main.css'],
  googleFonts: {
    families: {
      'Fira Sans': [300, 500, 900],
      'Noto Serif Tamil': [300, 400, 900],
    },
    subsets: ['latin'], // English only
    display: 'swap', // Reduces invisible text flash
    prefetch: true, // Prefetch the CSS file
    preconnect: true, // Preconnect to Google domains
    preload: true, // Preload font files
    download: false, // Keep using Google's CDN
    base64: false // Don't inline fonts
  },
    image: {
    provider: 'ipx',
    format: ['avif', 'webp'], // Fallback chain
    ipx: {
      maxAge: 60 * 60 * 24 * 30, // 30 days
    }
  }
})