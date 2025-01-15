import React, { useEffect, useRef, useState } from "react";
import phWare from "../assets/phware.png";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const typedElement = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: ["Evolution", "Career Growth"], // Strings to display
      typeSpeed: 50, // Speed at which each character is typed
      backSpeed: 30, // Speed at which characters are deleted
      loop: true, // Loop the typing animation
    });

    // Destroy Typed.js instance on component unmounting
    return () => {
      typed.destroy();
    };
  }, []);

  const Navi = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    //alert(`We will get back to you, ${name}`); // Adjust this logic as necessary
    console.log(name=='' && email=='' && phone=='');
    
    if (name=='' && email=='' && phone==''){
      //alert('suc')
    }
    else{
      //alert(`We will get back to you, ${name}`);
    }
  };

  return (
    <div className="col-12 align-items-center justify-content-center">
      <div className="col-12 col-md-11 d-flex flex-md-row flex-column align-items-center justify-content-evenly my-md-4">
        <div className="col-md-6 col-11 jk-head-in d-flex align-items-center position-relative justify-content-center">
          <img src={phWare} className="position-absolute" alt="Background" />
          <h1 className="jk-head-h1 position-absolute">
            Sparking progress, <br />
            Driving <br />
            <span className="col-12 clr-prime" ref={typedElement}></span>
          </h1>
        </div>

        <div className="col-md-6 col-11 d-flex flex-column align-items-center justify-content-evenly">
          <h1 className="mb-5">Contact Us </h1>
          <form className="col-11 col-md-7">
            <div className="label-container border my-4">
              <input
                type="text"
                id="name"
                className="jk-input-la col-12"
                placeholder=" " // Placeholder to trigger :not(:placeholder-shown)
                required
                value={name}
                onChange={(e) => setName(e.target.value)} // Corrected from e.value
                aria-label="Name" // Accessibility
              />
              <label htmlFor="name" className="jk-span-la">NAME</label>
            </div>

            <div className="label-container border my-4">
              <input
                type="email"
                id="mail"
                className="jk-input-la col-12"
                placeholder=" "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Add state handling for email
                aria-label="Email" // Accessibility
              />
              <label htmlFor="mail" className="jk-span-la">MAIL-ID</label>
            </div>

            <div className="label-container border my-4">
              <input
                type="tel"
                id="ph"
                className="jk-input-la col-12"
                placeholder=" "
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)} // Add state handling for phone
                aria-label="Phone Number" // Accessibility
              />
              <label htmlFor="ph" className="jk-span-la">PHONE NUMBER</label>
            </div>

            <button className="btn jk-btn text-white col-12 mt-4" type="sumbit" onClick={handleSubmit}>
              Give enquiry
            </button>
            <button className="btn btn-warning mt-3 col-12" onClick={() => Navi('/login')} >
                      go class
                    </button>
          </form>
        </div>
      </div>
    </div>
  );
}
