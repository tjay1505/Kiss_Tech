import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import {first5 , last5} from './Data'

export default function Product() {
  useEffect(() => {

    gsap.to(".pro-slide-one", {
      x: -250,
      scrollTrigger: {
        trigger: ".pro-slide-one",
        scrub: 1,
        start: "center bottom",
        end:'center center'

      },
    });
    gsap.to(".pro-slide-two", {
      x: 250,
      scrollTrigger: {
        trigger: ".pro-slide-one",
        scrub: 1,
        start: "center bottom",
        end:'center center'
      },
    });
  }, []);
  return (
    <div id="PRO" className=" col-12 d-flex flex-column align-items-center mt-5 ">
      <div className="col-8 text-center ">
        <p data-aos="fade-up" className=" fw-bolder col-12 clr-prime">Our products</p>
        <p className="col-12 fs-4">
        Explore our diverse range of <br /> high-quality products
        </p>
      </div>
      <div className="col-12  d-flex flex-column align-items-center justify-content-evenly jk-product-slide position-relative">
        <div className="pro-slide-one d-flex flex-md-nowrap  flex-row align-items-center col-12 justify-content-evenly my-2">
          {first5.map((e) => (
            <React.Fragment key={e.id} >
                <a href="#" className="jk-pro-box d-flex flex-column align-items-center justify-content-evenly me-3  mb-md-0 py-3 mb-2 text-white text-decoration-none" >
                  <img src={e.img} className="col-8" alt="" />
                    <p className=" fs-5" >{e.txt}</p>
                </a>
            </React.Fragment>
          ))}
        </div>
        <div className="pro-slide-two d-flex my-5 flex-md-nowrap flex-row align-items-center col-12 justify-content-evenly">
        {last5.map((e) => (
            <React.Fragment key={e.id} >
                <a href="#" className="jk-pro-box d-flex flex-column align-items-center justify-content-evenly me-3 mb-md-0 py-3 mb-2 text-white text-decoration-none" >
                  <img src={e.img} className="col-8" alt="" />
                    <p className=" fs-5" >{e.txt}</p>
                </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
