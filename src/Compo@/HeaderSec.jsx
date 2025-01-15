import React from "react";
import { useNavigate} from 'react-router-dom'
export default function HeaderSec({word}) {
    const navi = useNavigate()
  return (
    <div className="col-12 jk-bg-clr text-white d-flex align-items-center justify-content-start mb-3 " style={{ height: 10 + "vh" }}>
      <button className="fw-bolder btn text-white fs-2 mx-3  " onClick={() => navi(-1) } >&#8592;</button>
      <div className="heading fs-2">
        {word || 'Kisstech'}
      </div>
    </div>
  );
}
