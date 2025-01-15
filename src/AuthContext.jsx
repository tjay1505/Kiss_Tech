import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Initially null to prevent immediate redirects
  const nav = useNavigate();

  useEffect(() => {
    // Checking the session on page load
    const session = JSON.parse(localStorage.getItem("authToken"));
    const now = new Date().getTime();

    if (session) {
      if (session && now < session.expiry) {
        setIsAuthenticated(true); // Session is valid, keep the user logged in
        console.log('1');
      } else {
        localStorage.removeItem("authToken"); // Session expired, remove the token
        localStorage.removeItem('IDlog')
        setIsAuthenticated(false);
        console.log('2');
        //nav("/"); // Redirect to login
      }
    } else {
      setIsAuthenticated(false); // No session, not authenticated
      console.log('3');

      //nav("/"); // Redirect to login
    }
  }, [nav]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


export const userContext = createContext()

export const courseContext = createContext()