/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Navbar.jsx",
    "./src/components/MobileNavbar.jsx",
    "./src/components/Home.jsx"
  ],
  theme: {
    fontFamily:{
      display:["K2D", "Lato"]
    },

    extend: {
      colors:{
        background:"#F7FAFF",
        primary:"#13B9AB",
        green:"#00FFE9",
        overlayBg:"rgba(0,0,0,0.3)"
      }
    },
  },
  plugins: [],
}

