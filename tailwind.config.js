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
        'hero-Back' : "url('/src/assets/bg/CurveLine.svg')",
        'hero-Back2' : "url('/src/assets/bg/bg1.png')",
        'project-background' : "url('/src/assets/bg/project-1.png')",
        

      },
      fontFamily: {
        'Finlandica': ['Finlandica'],
        'logo': ['Rubik Vinyl'],

      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      },
    },
  },
  plugins: [daisyui, flowbite.plugin(),],
}

