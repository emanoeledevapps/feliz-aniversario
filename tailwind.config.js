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
      },
      fontFamily:{
        playwrite: ['Playwrite', 'sans-serif'],
        'playwrite-thin': ['Playwrite-thin', 'sans-serif'],
        dancing: ['Dancing', 'sans-serif'],
        'dancing-bold': ['Dancing-bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

