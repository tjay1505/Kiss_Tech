import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../AppOne.css";
import de from "../assets/newAss/whatsapp/vid1.mp4";
import dr from "../assets/newAss/whatsapp/vid2.mp4";
import { TestymonData } from "./Data";


export default function Testymon() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  // Helper function to render stars
  const renderStars = (count) => {
    let stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <span className="text-primary me-2" key={i}>
          &#9733;
        </span>
      ); // Push a star for each count
    }
    return stars;
  };

  return (
    <>
      <div id='TESTY' className="col-12 text-center my-3 my-md-5">
        <p data-aos="fade-up" className=" fw-bolder col-12 clr-prime">Testimonials</p>
        <p className="col-12 fs-4">
          Hear what students have to say <br /> about us and our class-room
        </p>
        <div className="col-12 d-flex flex-md-row flex-column align-items-center justify-content-evenly my-5 ">
          <video data-aos="fade-up-right" width="750" height="500" className="col-md-5 col-xl-4  col-10 shadow" controls controlsList="nodownload">
            <source src={de}  type="video/mp4" />
          </video>
          <video data-aos="fade-up-left" muted width="750" height="500" className="col-md-5 col-xl-4 mt-md-0 mt-5 col-10 shadow" controls controlsList="nodownload">
            <source src={dr} type="video/mp4" />
          </video>
        </div>
       <p className="col-12 fs-4">
          Review from past students
        </p> 
      </div>

      <div className="col-12 d-flex align-items-center justify-content-center jk-testy ">
        <Slider {...settings} className="jk-testy-slide ">
          {TestymonData.map((e) => (
            <React.Fragment key={e.id}>
              <div className="d-flex flex-column align-items-center justify-content-evenly shadow   jk-border text-start">
                {/* <span className="font-monospace dbq opacity-25 col-12 text-end pe-3">
                  "
                </span> */}

                {/* Star rating div 
                
                <img src={e.img} className="col-8" alt="" />*/}
                <p className="fs-3 col-10">{e.names}</p>
                <p className="fs-6 col-10">{e.p}</p>
                <div className="col-10">
                  {renderStars(e.stars)} {/* Render stars based on the value */}
                </div>
                
              </div>
            </React.Fragment>
          ))}
        </Slider>
      </div>
    </>
  );
}
