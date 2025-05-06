/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      dmSerif: ['DM Serif Display', "serif"], 
      pixelify: ['Pixelify Sans', "sans-serif"],
      robotoSlab: ['Roboto Slab', 'serif']
      // Add more custom font families as needed
    },},
  },
  plugins: [],
}

