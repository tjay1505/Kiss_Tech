import React, { useEffect, useRef, useState } from "react";
import phWare from "../assets/phware.png";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

export default function Landing() {
  const typedElement = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  //const Navi = useNavigate();

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

  const Navi = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      inquiryType === "" ||
      inquiryType === "Select Inquiry Type"
    ) {
      toast.warning("Please fill in all fields", { autoClose: 1500 });
      return;
    }

    // Email validation (simple regex for basic format check)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.warning("Please enter a valid email address", { autoClose: 1500 });
      return;
    }

    // Phone number validation (must be exactly 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.warning("Please enter a valid 10-digit phone number", {
        autoClose: 1500,
      });

      //for type
      if (inquiryType == "" || inquiryType == "Select Inquiry Type") {
        toast.warning("Choose an Career path");
      }

      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    const formData = { name, email, phone, inquiryType };

    try {
      const response = await fetch("/api/send-mail", {
        // API route on Vercel
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(() => {
          setName("");
          setPhone("");
          setEmail("");
          toast.success("Successfully sent! our team will reach you");
        })
        .catch(() => toast.error("something went worng"));

      const result = await response.json();
      if (response.status === 200) {
        setSuccess("Form submitted successfully!");
        setName("");
        setEmail("");
        setPhone("");
      } else {
        setError("There was an error sending the form.");
        toast.error("something went worng");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      toast.error("something went worng");
    } finally {
      setLoading(false);
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
              <label htmlFor="name" className="jk-span-la">
                NAME
              </label>
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
              <label htmlFor="mail" className="jk-span-la">
                MAIL-ID
              </label>
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
              <label htmlFor="ph" className="jk-span-la">
                PHONE NUMBER
              </label>
            </div>

            <div className="label-container border my-4">
              <select
                id="inquiryType"
                className="jk-input-la col-12"
                required
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                aria-label="Inquiry Type"
              >
                <option value="Select Inquiry Type" selected>
                  Select your careee path
                </option>
                <option value="UI UX design">UI UX design</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Web design">Web design</option>
                <option value="Java programming">Java programming</option>
                <option value="Python programming">Python programming</option>
                <option value="Graphic designing">Graphic designing</option>
              </select>
            </div>

            <button
              className="btn jk-btn text-white col-12 mt-4"
              type="sumbit"
              onClick={handleSubmit}
            >
              Give enquiry
            </button>
            <button
              className="btn btn-warning mt-3 col-12"
              onClick={() => Navi("/login")}
            >
              go class
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" transition={Bounce} />
    </div>
  );
}
