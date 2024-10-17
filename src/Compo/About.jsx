import React from "react";
import group2 from '../assets/newAss/group2.png'
import group1 from '../assets/newAss/group1.png'
export default function About() {
  return (
    <div className="col-12 d-flex flex-row align-items-center position-relative justify-content-center text-center my-3 my-md-5">
      <div className="col-md-3 col-2   jk-group-img-1 d-flex align-items-center justify-content-start d-md-block ">
        <img src={group1} className="col-md-8 col-xl-7 col-11" alt="" />
      </div>
      <div data-aos="fade-up" id="ABOUT" className="col-md-6 col-8 position-relative z-1">
        <h1 className=" fs-6 col-12 clr-prime">About us</h1> 
        <p className=" fs-2 col-12">
        Where innovation meets implementation, and technology transforms potential into performance
        </p>
        <p className="col-12 d-none d-md-block">
        Our comprehensive suite of IT services is designed to propel your business forward in the digital landscape. We don't just provide services; we engineer solutions that empower your enterprise to thrive in an ever-evolving tech-driven world. From seamless integration to robust solutions, we are committed to crafting bespoke strategies that align with your unique goals.
        </p>
      </div>
      <div className="col-md-3 col-2 jk-group-img-2 d-flex align-items-center justify-content-end d-md-block ">
        <img src={group2} className="col-md-8 col-xl-7 col-11" alt="" />
      </div>
    </div>
  );
}
