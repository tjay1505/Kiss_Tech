import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../fireConfig";
import logoImg from '../assets/logo.png';
import Footers from "../Compo/Footers";
import Header from "../Compo/HeadersOne";
import RazarPayBtn from "./RazarPayBtn";

function TemplateView() {
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const docId = 'wCsFWQwxGhLTru8hBd0H';

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const docRef = doc(db, "demoClasses", docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTemplate(docSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (err) {
        console.error("Error fetching document:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [docId]);

  if (loading)
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 vw-100">
        <img src={logoImg} alt="" />
        <p className='mt-3'>Loading...</p>
      </div>
    );

  if (!template) return <p>No template found.</p>;

  return (
    <div className="container my-1">
      <Header />

      <div className="card shadow-lg p-4 border-0 rounded">
        {/* Title Section */}
        <div className="text-center mb-1">
          <h2 className="fw-bold text-primary">{template.title}</h2>
          <h5 className="text-muted">{template.subtitle}</h5>
        </div>

        {/* Image */}
        {template.image && (
          <div className="text-center mb-3">
            <img
              src={template.image}
              alt="Class Visual"
              className="img-fluid rounded"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Info Section */}
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="bg-light p-3 rounded border">
              <strong>Mentor:</strong>
              <p className="mb-0">{template.instructor}</p>
            </div>
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <div className="bg-light p-3 rounded border">
              <strong>📍 Address:</strong>
              <p className="mb-0">{template.address}</p>
            </div>
          </div>
                    <div className="col-md-6 mt-3 mt-md-0">
            <div className="bg-light p-3 rounded border">
              <strong>Description:</strong>
              <p className="mb-0">{template.description}</p>
            </div>
          </div>
        </div>



        {/* Payment Section */}
        <div className="d-flex align-items-center justify-content-evenly my-4">
          <div className="shiny-text">
            Make Payment <span style={{ marginLeft: '13px' }}> →</span>
          </div>
          <RazarPayBtn />
        </div>

        {/* Schedule */}
        <h4 className="mb-3 mt-3">📅 Day-wise Plan</h4>
        <div className="accordion" id="scheduleAccordion">
          {template.schedule.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading-${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`collapse-${index}`}
                >
                  📘 Day {item.day}: {item.topic}
                </button>
              </h2>
              <div
                id={`collapse-${index}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading-${index}`}
                data-bs-parent="#scheduleAccordion"
              >
                <div className="accordion-body">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 my-2 mt-4" >
        <h5>🔒 Disclaimer for Demo Class</h5>
          <li style={{fontSize:'12px'}} >
            This demo class is conducted solely for educational and informational purposes. Attending the demo does not guarantee job placement, certification, or full course admission. The content delivered is a brief overview of our complete curriculum.
          </li>
          <li style={{fontSize:'12px'}} > <b>Please note:</b> The demo class fee is strictly non-refundable under any circumstances.
All examples, tools, and strategies shown during the session are for demonstration only and may be subject to change. Kisstech Academy reserves the right to modify the session schedule, topics, or access without prior notice.</li>
      </div>

      <Footers />
    </div>
  );
}

export default TemplateView;
