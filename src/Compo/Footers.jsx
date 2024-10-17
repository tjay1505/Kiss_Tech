import React from "react";
import logo from "../assets/logo.png";

export default function Footers() {
  return (
    <div className="col-12 jk-footer pt-4  d-flex flex-column align-items-end justify-content-evenly text-white">
      <div className="col-11 text-start">
        <p className=" fs-3">
          Creativity Has No Boundaries <br /> But It Has An Address
        </p>
        <p>Let's Connect & make something great together.</p>
      </div>
      <div className="col-11 jk-footer-in d-flex flex-md-row flex-column align-items-center justify-content-md-start justify-content-center">
        <div className="col-md-3 col-11 py-1 ms-5">
          <p className="col-12 fs-3">nungambakkam</p>
          <p className="col-12">
            110 gandhi road , <br />
            subba road avenue <br />
            nungambakkam , tamilnadu <br />
            chennai - 600008.
          </p>
          <a href="https://www.google.com/maps/place/110,+Uthamar+Gandhi+Rd,+Subba+Road+Avenue,+Nungambakkam,+Chennai,+Tamil+Nadu+600034/@13.0618428,80.2441592,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52666905786707:0x1fbcde3a184e72a2!8m2!3d13.0618428!4d80.2467341!16s%2Fg%2F11fjx7pcz5?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" className="btn border border-white text-white mb-2" >Open in Map</a>
        </div>
        <div className="col-md-3 col-11 ms-5">
          <p className="col-12 fs-3">Mount road</p>
          <p className="col-12">
            624 4th floor khiviraj building, <br />
            Anna salai near gemini flyover <br />
            Anna salai , tamilnadu <br />
            chennai - 600006.
          </p>
          <a href="https://www.google.com/maps/place/Khivraj+complex/@13.0311428,80.2356544,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267ac1218bf89:0x16fb771e5132fac!8m2!3d13.0311428!4d80.2382293!16s%2Fg%2F1hf2w9m87?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" className="btn border border-white text-white mb-2" >Open in Map</a>
        </div>
      </div>
      <div className="col-11  mt-3  d-flex flex-md-row flex-column align-items-center justify-content-md-start justify-content-center">
        <div className="col-md-5 col-11 d-flex align-items-center justify-content-center py-md-0 py-2">
          <img src={logo} className=" col-4" alt="" />
          <ul>
            <p className=" fw-bolder">kiss tech</p>
            <p>
              your partners through the <br /> digital age.{" "}
            </p>
            <div className=" col-12 d-flex align-items-center justify-content-evenly">
              <a className="text-white fs-3" href="https://www.facebook.com/share/Y4SA2BQrM5mhSxZR/">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
              <a href="https://wa.me/917806969730" className="text-white fs-3" >
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/kiss_tech_/profilecard/?igsh=MTFocGQ3MndhdjB0Ng==" className="text-white fs-3">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="" className="text-white fs-3">
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
