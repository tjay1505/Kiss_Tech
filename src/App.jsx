import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./Compo/Headers";
import Landing from "./Compo/Landing";
import About from "./Compo/About";
import OurService from "./Compo/OurService";
import Product from "./Compo/Product";
import Testymon from "./Compo/Testymon";
import Footers from "./Compo/Footers";

function App() {
  return (
    <div className=" container-fluid vh-auto  jk-cont">
      <Headers />
      <Landing />
      <About />
      <Product />
      <OurService />
      <Testymon />
      <Footers />
    </div>
  );
}

export default App;
