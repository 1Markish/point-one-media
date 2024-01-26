/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Navbar.jsx"
  ],
  theme: {
    fontFamily:{
      display:["K2D", "Lato"]
    },

    extend: {
      colors:{
        background:"#F7FAFF"
      }
    },
  },
  plugins: [],
}

