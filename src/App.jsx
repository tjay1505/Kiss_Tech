import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, {  useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Compo@/LogIn";
import SignUp from "./Compo@/SignUp";
import Home from "./Compo@/Home";
import { AuthProvider, userContext } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";
import Course from "./Compo@/Course";
import PdfViewerWithSidebar from "./Compo@/PdfViewer";
import CourseDetail from "./Compo@/CourseDetail";
import AppOne from "./AppOne";
function App() {
  const [logUser, setLogUser] = useState("");
  
  return (
    <userContext.Provider value={{ logUser, setLogUser }}>
      <Router>
        <AuthProvider>

          <Routes>
            <Route path="/"  element={<AppOne/>} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route
              path="/course"
              element={
                <ProtectedRoute>
                  <Course />
                </ProtectedRoute>
              }
            />

            <Route path="/pdf" element={<ProtectedRoute><PdfViewerWithSidebar/></ProtectedRoute>} />
            <Route path="/course-details" element={<ProtectedRoute><CourseDetail/></ProtectedRoute>} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </userContext.Provider>
  );
}

export default App;
