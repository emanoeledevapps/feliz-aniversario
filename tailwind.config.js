/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        container:{
          primary: '#b6c6be',
          secondary: 'white'
        }
      }
    },
  },
  plugins: [],
}

