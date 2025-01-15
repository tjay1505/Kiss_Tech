import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Container,
  Navbar,
  NavDropdown,
  Image,
  Offcanvas,
  Button,
} from "react-bootstrap";
import img from "../assets/R351.png";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
export default function Home() {
  const navi = useNavigate()
  const { logUser, setLogUser } = useContext(userContext);
  useEffect(() => {
    let storedUser = JSON.parse(localStorage.getItem("IDlog"));
    storedUser = storedUser.split('@')[0]
    setLogUser(storedUser);

  }, []);
  console.log(logUser);

  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarClose = () => setShowSidebar(false);
  const handleSidebarShow = () => setShowSidebar(true);
  const handleLogout = () => {
    localStorage.clear();
    console.log('www');
    navi('/login')
  };
  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container>
          {/* Brand aligned to the left */}
          <Navbar.Brand href="#home"><img src={logo} className="col-md-6 col-4" alt="" /></Navbar.Brand>
          <Navbar.Toggle
            style={{ outline: "none", border: "none" }}
            className="bootNav"
            aria-controls="basic-navbar-nav"
          >
            <span className="custom-toggler-icon">
              {/* Replace with your custom icon */}
              <Image
                src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" // Replace with your icon image URL
                width="25"
                height="25"
                alt="Custom Menu Icon"
              />
            </span>
          </Navbar.Toggle>{" "}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation links aligned to the right */}
            <Nav className="ms-auto align-items-center">
              <Nav.Link className="mx-3 text-dark" href="#home">
                <Link to='/Course' className="text-dark text-decoration-none" >Course</Link>
              </Nav.Link>
              <Nav.Link className="mx-3" href="#features">
                Assessment
              </Nav.Link>
              <Nav.Link className="mx-3" href="#pricing">
                <a href="tel:+9100000000" className="text-dark text-decoration-none" >Contact mentor</a>
              </Nav.Link>
              {/* Profile Icon to Open Sidebar */}
              <Button variant="lin" onClick={handleSidebarShow}>
                <span className="text-black mx-2">{logUser}</span>
                <Image
                  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" // Replace with your profile image URL
                  roundedCircle
                  width="30"
                  height="30"
                  alt="Profile Icon"
                />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Sidebar (Offcanvas) */}
      <Offcanvas show={showSidebar} onHide={handleSidebarClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex align-items-center mb-3">
            <Image
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" // Replace with your profile image URL
              roundedCircle
              width="50"
              height="50"
              alt="Profile Icon"
            />
            <span className="ms-3">{logUser}</span>
          </div>
          <Nav className=" d-flex flex-column ">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
            <p onClick={handleLogout} className="text-danger">
              Logout
            </p>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>{" "}
      <div className="container-fluid  d-flex flex-column align-items-center justify-content-evenly mt-4">
        <h1 className="col-md-8 col-11 fs-6">Welcome, {logUser}! </h1>
        <h1 className="jk-fnt-clr col-md-8 col-11 fs-4">
          Your Virtual Classroom Awaits!
        </h1>
        <img src={img} alt="" className="col-md-8 col-lg-7 col-11 my-3 " />
        <h1 className="jk-fnt-clr fs-4 col-md-8 col-11">
          Your journey to success continues here.
        </h1>
        <button className="btn jk-bg-clr text-white rounded-5 mt-3">
          Enter classroom
        </button>
      </div>
    </>
  );
}
