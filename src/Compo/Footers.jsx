import React from "react";
import logo from "../assets/logo.png";

export default function Footers() {
  return (
    <div className="col-12 jk-footer  d-flex flex-column align-items-end justify-content-evenly text-white">
      <div className="col-11 text-start">
        <p className=" fs-3">
          Creativity has no border <br /> but it has an address
        </p>
        <p>let's connect and make great thing together.</p>
      </div>
      <div className="col-11 bg-white bg-opacity-25 d-flex flex-md-row flex-column align-items-center justify-content-md-start justify-content-center">
        <div className="col-md-3 col-11 ms-5">
          <p className="col-12 fs-3">nungambakkam</p>
          <p className="col-12">
            110 gandhi road , <br />
            subba road avenue <br />
            nungambakkam , tamilnadu <br />
            chennai - 600008.
          </p>
        </div>
        <div className="col-md-3 col-11 ms-5">
          <p className="col-12 fs-3">Mount road</p>
          <p className="col-12">
            624 4th floor khiviraj building , <br />
            Anna salai near gemini flyover <br />
            Anna salai , tamilnadu <br />
            chennai - 600006.
          </p>
        </div>
      </div>
      <div className="col-11  d-flex flex-md-row flex-column align-items-center justify-content-md-start justify-content-center">
        <div className="col-md-5 col-11 d-flex align-items-center justify-content-center py-md-0 py-2">
          <img src={logo} className=" col-4" alt="" />
          <ul>
            <p className=" fw-bolder">kiss tech</p>
            <p>
              your partners through the <br /> digital age.{" "}
            </p>
            <div className=" col-12 d-flex align-items-center justify-content-evenly">
              <a href="">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </div>
          </ul>
        </div>
        <div className="col-md-6 col-11 d-flex ">
          <div className="col-4">
            <p className=" fw-medium">company</p>
            <p>career</p>
            <p>contact us</p>
            <p>about us</p>
          </div>
          <div className="col-4">
            <p className=" fw-medium">Resource</p>
            <p>industries</p>
            <p>blog</p>
          </div>
          <div className="col-4">
            <p className=" fw-medium">legal</p>
            <p>privacy policy</p>
            <p>refund policy</p>
          </div>
        </div>
      </div>
      <div className="col-12 py-2 text-center">
        copyright @ kisstech company - All right reserved || tj
      </div>
    </div>
  );
}
