import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Stats from "./components/Stats";
import OurServices from "./components/OurServices";
import OurWork from "./components/OurWork";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";


function App() {
  return (
  <> 
    <Navbar/>
    <Home/>
    <Stats/>
    <OurServices/>
    <OurWork/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
  </>
  );
}

export default App;
