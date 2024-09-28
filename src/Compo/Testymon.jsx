import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestymonData = [
  {
    id: 1,
    names: "ragul",
    stars: 3,
    p: "lorjrfv vwrv wvw cved v dv dvdvefe f e dqw asvqda cdv v",
  },
  {
    id: 2,
    names: "ragul",
    stars: 5,
    p: "lorjrfv vwrv wvw cved v dv dvdvefe f e dqw asvqda cdv v",
  },
  {
    id: 3,
    names: "ragul",
    stars: 3,
    p: "lorjrfv vwrv wvw cved v dv dvdvefe f e dqw asvqda cdv v",
  },
  {
    id: 4,
    names: "ragul",
    stars: 4,
    p: "lorjrfv vwrv wvw cved v dv dvdvefe f e dqw asvqda cdv v",
  },
  {
    id: 5,
    names: "ragul",
    stars: 3,
    p: "lorjrfv vwrv wvw cved v dv dvdvefe f e dqw asvqda cdv v",
  },
];

export default function Testymon() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      stars.push(<span className=" text-primary me-2" key={i}>&#9733;</span>); // Push a star for each count
    }
    return stars;
  };

  return (
    <>
    <div className="col-12 text-center mt-4">
        <p className=" fw-bolder col-12 text-primary">Testimonials</p>
        <p className="col-12 fs-4">
            Hear what students have to say <br /> about us
        </p>
      </div>
    <div className="col-12 bg-secondary d-flex align-items-center justify-content-center jk-testy mb-4">
      <Slider {...settings} className="jk-testy-slide">
        {TestymonData.map((e) => (
          <React.Fragment key={e.id}>
            <div className="d-flex flex-column align-items-center justify-content-evenly border rounded-2 text-start">
              <span className="font-monospace dbq opacity-25 col-12 text-end pe-3">"</span>
              
              {/* Star rating div */}
              <div className="star">
                {renderStars(e.stars)} {/* Render stars based on the value */}
              </div>

              <p className="fs-3 col-10">{e.names}</p>
              <p className="fs-6 col-10">{e.p}</p>
            </div>
          </React.Fragment>
        ))}
      </Slider>
    </div>
    </>
  );
}
