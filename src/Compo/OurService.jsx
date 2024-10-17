import React from "react";
import { ServiceData } from "./Data";


export default function OurService() {
  return (
    <>
    <div id='SERVICE' className="col-12 text-center my-3 my-md-5">
        <p data-aos="fade-up" className=" clr-prime fw-bolder" >our courses</p>
    </div>
    <div className="col-12 text-white d-flex flex-md-row flex-column h-auto align-items-center justify-content-center py-5 jk-service">
      <div className="col-md-4 col-11 d-flex  align-items-center justify-content-center">
        <h1 className=" ps-md-4 my-md-0 mb-5 fs-2 text-white">Custom IT courses for Your career</h1>
      </div>
      <div className="col-md-8 col-11 d-flex flex-wrap gap-md-4 gap-5 align-items-center justify-content-center">
        {ServiceData.map((e) => (
          <React.Fragment key={e.h1}>
            <div data-aos="fade-up" className="border d-flex flex-column my-2 position-relative align-items-start px-2 justify-content-center col-md-5 col-12 jk-serv-box">
              <img
                src={e.img}
                className="col-2 col-md-3 col-xl-2 mb-2 position-absolute  jk-serv-img"
                alt=""
              />
              <p className=" fs-5 mt-2">{e.h1}</p>
              <p className=" fs-6" >{e.p}</p>
              <a className=" text-black link-offset-3" href={e.links}>learn more</a>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
    </>
  );
}
