import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const ProductData = [
  {
    id: 1,
    img: "",
    txt: "tittle 1",
  },
  {
    id: 2,
    img: "",
    txt: "tittle 2",
  },
  {
    id: 3,
    img: "",
    txt: "tittle 3",
  },
  {
    id: 4,
    img: "",
    txt: "tittle 4",
  },
  {
    id: 5,
    img: "",
    txt: "tittle 5",
  },
  {
    id: 6,
    img: "",
    txt: "tittle 6",
  },
  {
    id: 7,
    img: "",
    txt: "tittle 7",
  },
  {
    id: 8,
    img: "",
    txt: "tittle 8",
  },
];

var first5 = ProductData.slice(0, 4);
var last5 = ProductData.slice(-4)

export default function Product() {
  useEffect(() => {
    console.log(first5);

    gsap.to(".pro-slide-one", {
      x: -300,
      scrollTrigger: {
        trigger: ".pro-slide-one",
        scrub: 1,
        start: "center bottom",
      },
    });
    gsap.to(".pro-slide-two", {
      x: 300,
      scrollTrigger: {
        trigger: ".pro-slide-one",
        scrub: 1,
        start: "center bottom",
      },
    });
  }, []);
  return (
    <div className=" col-12 d-flex flex-column align-items-center my-3 ">
      <div className="col-8 text-center ">
        <p className=" fw-bolder col-12 text-primary">Our products</p>
        <p className="col-12 fs-4">
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Sequi
        </p>
      </div>
      <div className="col-12 border d-flex flex-column align-items-center justify-content-evenly jk-product-slide position-relative">
        <div className="pro-slide-one d-flex flex-row align-items-center col-12 justify-content-evenly">
          {first5.map((e) => (
            <React.Fragment key={e.id} >
                <div className="jk-pro-box" >
                    <p className=" fs-4" >{e.txt}</p>
                </div>
            </React.Fragment>
          ))}
        </div>
        <div className="pro-slide-two d-flex flex-row align-items-center col-12 justify-content-evenly">
        {last5.map((e) => (
            <React.Fragment key={e.id} >
                <div className="jk-pro-box" >
                    <p className=" fs-4" >{e.txt}</p>
                </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
