import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fireConfig";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as bootstrap from "bootstrap";

function SignUp() {
  const [mail, Setmail] = useState("");
  const [pass, Setpass] = useState("");
  const [passC, SetpassC] = useState("");
  const navi = useNavigate();

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const SignIn = async () => {
    try {
      if (mail && pass && passC && pass === passC && pass.length >= 9) {
        await createUserWithEmailAndPassword(auth, mail, passC);
        toast.success("Account Created! Redirect to LogIn",{onClose:() => navi('/')});
      } else if (pass !== passC) {
        toast.warn("Both password must be same");
      } else if (mail && pass && passC && pass.length <= 9) {
        toast.warn("minimum 9 characters at password");
      } else {
        toast.warn("Fill all fields");
      }
    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case "auth/email-already-in-use":
          toast.error("email-already-in-use! Please try again with new one.");
          break;
        case "ready-in-use":
          toast.error("email-already-in-use! Please try again with new one.");
          break;
        default:
          toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <div className="container-fluid text-start vh-100 bg-body-secondary d-flex flex-column align-items-center justify-content-center">
        <div className="div col-12 text-start col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-start">
          <input
            type="email"
            className=" input-group-text col-11 mb-4 shadow"
            placeholder="E-mail"
            onChange={(e) => Setmail(e.target.value)}
          />
          <p style={{ fontSize: 12 + "px" }} className="text-primary col-11">
            <hr className="text-black" />
          </p>
          <input
            type="password"
            className=" input-group-text col-11  mb-4 shadow"
            placeholder="password"
            onChange={(e) => Setpass(e.target.value)}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="password must atleast 9 characters"
          />
          <input
            type="password"
            className=" input-group-text col-11 mb-4 shadow"
            placeholder="Confirm password"
            onChange={(e) => SetpassC(e.target.value)}
          />
          <button
            onClick={() => SignIn()}
            className="btn bg-success col-11 mb-3 shadow"
          >
            SignUp
          </button>
          <p className="text-secondary" onClick={() => navi("/login")}>
            Already have an Acc ?{" "}
            <span className="text-decoration-underline">Back to LogIn</span>
          </p>
        </div>
        <ToastContainer position="top-center" transition={Bounce} />
      </div>
    </>
  );
}

export default SignUp;
