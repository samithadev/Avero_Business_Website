/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        text: '#1E1E1E',
        ash: '#808080'
      },

      screens: {
        '2xl': '1760px'
      }
    },
  },
  plugins: [],
}

