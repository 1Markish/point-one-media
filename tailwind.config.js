/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Navbar.jsx",
    "./src/components/MobileNavbar.jsx",
    "./src/components/Home.jsx",
    "./src/components/Stats.jsx",
    "./src/components/Cards/StatsCard.jsx",
    "./src/components/Cards/ServiceInfoCard.jsx",
    "./src/components/OurServices.jsx",
    "./src/components/OurWork.jsx",
    "./src/components/Testimonials.jsx",
    "./src/components/Cards/TestimonialCard.jsx",
    "./src/components/Pagination/Pagination.jsx",
    "./src/components/CallToAction.jsx",
    "./src/components/Footer.jsx"
    
  ],
  theme: {
    fontFamily:{
      display:["K2D", "Lato"]
    },

    extend: {
      colors:{ 
        background:"#F7FAFF",
        primary:"#13B9AB",
        secondary:"#D6FFFC",
        green:"#00FFE9",
        lightGreen:"#00FFE9",
        darkGreen:"#00B4A4",
        overlayBg:"rgba(0,0,0,0.3)",
        grey: "#403D3D"
      }
    },
  },
  plugins: [],
}

