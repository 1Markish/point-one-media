import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Stats from "./components/Stats";
import OurServices from "./components/OurServices";


function App() {
  return (
  <> 
    <Navbar/>
    <Home/>
    <Stats/>
    <OurServices/>
  </>
  );
}

export default App;
