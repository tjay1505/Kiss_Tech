import React, { useEffect, useRef, useState } from "react";
import HeaderSec from "./HeaderSec";
import * as pdfjsLib from "pdfjs-dist";
import { useLocation } from "react-router-dom";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
//pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const PdfViewerWithSidebar = () => {
  const [pdf, setPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const containerRef = useRef(null);

  const {state} = useLocation()

  const [view,setView] = useState(false)

  //console.log(state.documents[0].pdf1);
  

  //console.log(state.documents[0].subHeading);
  

  useEffect(() => {
   
    document.addEventListener('contextmenu',(e) => {
      e.preventDefault()
    })
    document.addEventListener('keydown',(e) => {
      if(e.key == "F12"){
        e.preventDefault
      }
    })


    const loadPdf = async () => {
        
      try {
        
        const pdfDoc = await pdfjsLib.getDocument(state.documents[0].pdf1).promise;
        
        setPdf(pdfDoc);
        setNumPages(pdfDoc.numPages);
        renderAllPages(pdfDoc);
        
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    loadPdf();
  }, []);

  const renderAllPages = async (pdfDoc) => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.innerHTML = ""; // Clear existing content
        
      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const scl = view ? 2 : 1.8
        const viewport = page.getViewport({ scale: scl });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;

        container.appendChild(canvas);
      }
    }
  };

  const goToPage = (pageNum) => {
    if (containerRef.current) {
      const canvasElements = containerRef.current.querySelectorAll("canvas");
      if (canvasElements[pageNum - 1]) {
        canvasElements[pageNum - 1].scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <HeaderSec word={"Study materials"} />
      <div className="" >
        <button className="btn m-2  border border-1 border-black" onClick={() => setView(!view)} > change view &#x1F4D1;</button>
        {/* <button className="btn m-2 border border-1 border-black" >Scale</button> */}
      </div>
      <div className="container-fluid d-flex overflow-hidden vh-100">
        {/* Sidebar */}
        <div className="col-2 d-flex flex-column jk-bg-clr-lig p-1 px-2 me-2">
          <h3>Table of Contents</h3>
          {state.documents[0].subHeading.map((topic) => (
            <p key={topic.page} className=" text-start btn border-0 rounded-0 border-bottom border-black " onClick={() => goToPage(topic.page)}>
              {topic.title}
            </p>
          ))}
        </div>

        {/* PDF Viewer */}
        <div
          className={view ? 'd-flex vh-100 overflow-x-scroll' : 'vh-100 overflow-y-scroll d-flex flex-column align-items-center col-10'}
          ref={containerRef}
        ></div>
      </div>
    </>
  );
};

export default PdfViewerWithSidebar;
