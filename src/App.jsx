import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Stats from "./components/Stats";
import OurServices from "./components/OurServices";
import OurWork from "./components/OurWork";
import Testimonials from "./components/Testimonials";


function App() {
  return (
  <> 
    <Navbar/>
    <Home/>
    <Stats/>
    <OurServices/>
    <OurWork/>
    <Testimonials/>
  </>
  );
}

export default App;
