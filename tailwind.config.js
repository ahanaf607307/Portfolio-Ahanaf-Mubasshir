/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ahanaf-bg': "url('/src/assets/icons/header_bg.png')",
        'hero-bg': "url('/src/assets/icons/banner.png')",
        'aElaven': "url('/src/assets/icons/aElaven.png')",
        'aTen': "url('/src/assets/icons/aTen.png')",
        'aEight': "url('/src/assets/icons/aEight.png')",

      },
      fontFamily: {
        'Finlandica': ['Finlandica'],
        'logo': ['Rubik Vinyl'],

      }
    },
  },
  plugins: [daisyui],
}

