/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        
      },
      fontFamily: {
        platino: ['Platino', 'serif'],
        comic: ['Comic Sans MS', 'cursive'],
        'simplecaps': ['Bebas Neue', 'sans-serif'], 
      },
      
     fontWeight:{
      extremebold: '1200',
     },
      
    },
  },
  plugins: [],
}

