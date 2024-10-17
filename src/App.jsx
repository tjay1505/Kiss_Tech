import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./Compo/Headers";
import Landing from "./Compo/Landing";
import About from "./Compo/About";
import OurService from "./Compo/OurService";
import Product from "./Compo/Product";
import Testymon from "./Compo/Testymon";
import Footers from "./Compo/Footers";
import Para from "./Compo/Para";
import AOS from "aos";
import 'aos/dist/aos.css'
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  return (
    <div className=" container-fluid vh-auto  jk-cont">
      <Headers />
      <Landing />
      <Para/>
      <About />
      <OurService />
      <Product />
      <Testymon />
      <Footers />
    </div>
  );
}

export default App;
