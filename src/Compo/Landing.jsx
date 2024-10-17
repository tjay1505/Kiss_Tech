import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import phWare from "../assets/phware.png";
import slide2 from "../assets/newAss/slide2.jpg";
import slide3 from "../assets/newAss/slide3.jpg";
import slide4 from "../assets/newAss/slide4.jpg";
import Typed from "typed.js";

export default function Landing() {
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: ["Evolution", "Career Growth"], // Strings to display
      typeSpeed: 50, // Speed at which each character is typed
      backSpeed: 30, // Speed at which characters are deleted
      loop: true, // Loop the typing animation
    });

    // Destroy Typed.js instance on component unmounting
    return () => {
      typed.destroy();
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="col-12 align-items-center justify-content-center">
      <div className=" col-12 col-md-11 d-flex flex-md-row flex-column align-items-center justify-content-evenly justify-content-md-center my-md-4">
        <div className="col-md-6 col-11 jk-head-in d-flex align-items-center position-relative justify-content-center">
          <img src={phWare} className=" position-absolute" alt="" />
          <h1 className="jk-head-h1 position-absolute">
            Sparking progress, <br />
            Driving{" "} <br />
            <span className="col-12 clr-prime" ref={typedElement}>
            </span>
          </h1>
        </div>
        <div className="col-md-6 col-11 h-100 d-flex align-items-center justify-content-center ">
          <Slider {...settings} className="jk-slider ">
            <div className="jk-slider-div">
              <img src={slide2} className="col-12" alt="" />
            </div>
            <div className="jk-slider-div">
              <img src={slide3} className="col-12" alt="" />
            </div>
            <div className="jk-slider-div">
              <img src={slide4} className="col-12" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
