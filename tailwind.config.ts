import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
        boxShadow: {
            primary: "0 4px 6px 2px rgba(0, 0, 0, 0.2)",
            header: "0 0 6px 2px rgba(0, 0, 0, 0.8)"
        },
        zIndex: {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            16: "16",
            17: "17",
            18: "18",
            19: "19",
            26: "26",
            27: "27",
            28: "28",
            29: "29"
        },
        colors: {
          brand: {
            primary: '#d4af37',
            secondary: '#fff6e0'
          }
        },
        screens: {
          'xs': '500px'
        }
    },
  },
  plugins: []
} satisfies Config