import React, { useEffect, useState } from "react";
import { ServiceData } from "./Data";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

export default function OurService({ setScroll, Scroll }) {
  const [menu, SetMenu] = useState(false);
  const [selection, setSelection] = useState(null);

  const openCard = (courseData) => {
    SetMenu(true);
    setScroll(!Scroll);
    setSelection(courseData?.subData || null); // Set selection to subData or null if not available
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Please ensure the second payment is made within one month of joining
    </Tooltip>
  );

  return (
    <>
      <div id="SERVICE" className="col-12 text-center my-3 my-md-5">
        {/* Rate card overlay */}
        {menu && selection && (
          <div className="overlay py-2">
            <div className="rate-card mb-md-5">
              <h2 className="border-bottom border-dark pb-2">
                {selection.sh || "N/A"}
              </h2>
              <div className="pre-view d-flex align-items-center justify-content-between py-2">
                <div className=" d-flex flex-column ps-2 justify-content-evenly  ">
                  <p>one-time plan</p>
                  <p className=" fw-bold">online</p>
                  <p>{selection.on1}</p>
                  <p className=" fw-bold">offline</p>
                  <p>{selection.off1}</p>
                  <p> &nbsp; </p>
                </div>
                <div className=" d-flex flex-column ps-2 justify-content-evenly col-6">
                  <p>dual-time plan</p>
                  <p className=" fw-bold">online</p>
                  <p>{selection.on2}/month</p>
                  <p className=" fw-bold">offline</p>
                  <p>{selection.off2}/month</p>
                  <OverlayTrigger
                    trigger="click" // Specify 'click' to enable tooltip on click
                    placement="top"
                    overlay={renderTooltip}
                    rootClose // This closes the tooltip when clicking outside
                  >
                    <p className=" icon-link-hover" >important Note<span className="text-danger" >*</span></p>
                  </OverlayTrigger>
                </div>
              </div>
              <button
                onClick={() => {
                  SetMenu(false);
                  setScroll(!Scroll);
                  setSelection(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <p data-aos="fade-up" className="clr-prime fw-bolder">
          our courses
        </p>
      </div>

      <div className="col-12 text-white d-flex flex-md-row flex-column h-auto align-items-center justify-content-center py-5 jk-service">
        <div className="col-md-4 col-11 d-flex align-items-center justify-content-center">
          <h1 className="ps-md-4 my-md-0 mb-5 fs-2 text-white">
            Custom IT courses for Your career
          </h1>
        </div>

        <div className="col-md-8 col-11 d-flex flex-wrap gap-md-4 gap-5 align-items-center justify-content-center">
          {ServiceData.map((e) => (
            <div
              key={e.links}
              data-aos="fade-up"
              className="border d-flex flex-column my-2 position-relative align-items-start px-2 justify-content-center col-md-5 col-12 jk-serv-box"
            >
              <img
                src={e.img}
                className="col-2 col-md-3 col-xl-2 mb-2 position-absolute jk-serv-img"
                alt={e.h1}
              />
              <p className="fs-5 mt-2">{e.h1}</p>
              <p className="fs-6">{e.p}</p>
              <p
                className="text-black link-offset-3 border-bottom border-dark fs-5"
                onClick={() => openCard(e)} // Pass the entire course data to openCard
              >
                learn more
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
