/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
import daisyui from 'daisyui';
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
        'aTwelve': "url('/src/assets/icons/a12.png')",
        'hero-Lottie': "url('/src/assets/lottieBG/bgBanner.json')",

      },
      fontFamily: {
        'Finlandica': ['Finlandica'],
        'logo': ['Rubik Vinyl'],

      }
    },
  },
  plugins: [daisyui, flowbite.plugin(),],
}

