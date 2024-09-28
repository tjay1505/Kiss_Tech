import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Landing() {
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className=" col-12 vh-auto d-flex flex-md-row flex-column align-items-center justify-content-evenly my-4">
      <div className="col-md-6 col-11 h-100 d-flex align-items-center justify-content-center border border-primary">
        <h1>from lanodng</h1>
      </div>
      <div className="col-md-6 col-11 h-100 d-flex align-items-center justify-content-center border border-success">
      <Slider {...settings} className="jk-slider" >
      <div className="jk-slider-div" >
        <h3>1</h3>
      </div>
      <div className="jk-slider-div" >
        <h3>2</h3>
      </div>
      <div className="jk-slider-div" >
        <h3>3</h3>
      </div>
    </Slider>
      </div>
    </div>
  );
}
