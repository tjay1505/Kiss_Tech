import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../fireConfig";
import { useAuth } from "../AuthContext";
import { ToastContainer, toast, Bounce } from "react-toastify";

function LogIn() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const navi = useNavigate();
  const { setIsAuthenticated } = useAuth();

  

  const logIn = async () => {
    try {
      if (mail && pass && pass.length > 4) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          mail,
          pass
        );

        localStorage.setItem(
          "IDlog",
          JSON.stringify( userCredential.user.email )
        );
        //setLogUser(localStorage.getItem("IDlog"));

        let expiryTime = new Date().getTime() + 120 * 120 * 1000; // 30 seconds for testing
        localStorage.setItem(
          "authToken",
          JSON.stringify({ expiry: expiryTime })
        );
        setIsAuthenticated(true); // Update authentication state
        toast.success("Login successfully! Wait Don't Refresh", {
          onClose: () => navi("/home"),
          autoClose: 1500,
        });
      } else if (mail && pass && pass.length < 4) {
        toast.warning("password miss-matching check password", {
          autoClose: 1500,
        });
      } else {
        toast.warning("Give mail and password", { autoClose: 1500 });
      }
    } catch (error) {
      console.error(error.code);
      switch (error.code) {
        case "auth/invalid-credential":
          toast.error("No user found check your mail and password", {
            autoClose: 2500,
          });
          break;
        default:
          toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <div className="container-fluid vh-100 bg-body-secondary d-flex flex-column align-items-center justify-content-center">
        <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center">
          <input
            type="email"
            className="input-group-text col-11 mb-4 shadow"
            placeholder="E-mail"
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="password"
            className="input-group-text col-11 mb-4 shadow"
            placeholder="Password"
            required
            onChange={(e) => setPass(e.target.value)}
          />
          <button onClick={logIn} className="btn bg-primary col-11 my-3 shadow">
            Login
          </button>
          <p className="text-secondary" onClick={() => navi("/signUp")}>
            New User! Create Account{" "}
            <span className="text-decoration-underline">SignIn here</span>
          </p>
        </div>
        <ToastContainer position="top-center" transition={Bounce} />
      </div>
    </>
  );
}

export default LogIn;