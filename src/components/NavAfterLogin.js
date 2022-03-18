import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
 
export const NavAfterLogin = () => {
 const [error, setError] = useState("");
 const { currentUser, logout } = useAuth();
 const navigate = useNavigate();
 
 async function handleLogout() {
   try {
     await logout();
     navigate.push("/");
   } catch {
     setError("Logout Failed");
   }
 }
 
 return (
   <header
     className="header-area  header-sticky background-header"
     style={{ top: "0", position: "fixed", backgroundColor: "white" }}
   >
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Sportify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#TeamSports"> Team Sports </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#SinglePlayer"> Single Player </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ESports"> E - Sports </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact"> Contact </a>
            </li>
            </ul>
            <li className="nav-item" style={{marginLeft: "30vw"}}>
              <Link to="myprofile">
              <strong style={{ color: "white" }}>
                {currentUser ? currentUser.email : "User is Loged out"}
              </strong>
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={handleLogout}
                className="btn btn-danger ms-4"
                type="button"
              >
                Logout
              </button>
            </li>
          
        </div>
      </div>
    </nav>
   </header>
 );
};
/*
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Sportify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item active">
              <a href="#TeamSports"> Team Sports </a>
            </li>
            <li className="nav-item active">
              <a href="#SinglePlayer"> Single Player </a>
            </li>
            <li className="nav-item active">
              <a href="#ESports"> E - Sports </a>
            </li>
            <li className="nav-item">
              <Link to="#"> Contact </Link>
            </li>
            </ul>
            <li className="nav-item" style={{marginLeft: "30vw"}}>
              <Link to="myprofile">
              <strong style={{ color: "white" }}>
                {currentUser ? currentUser.email : "User is Loged out"}
              </strong>
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={handleLogout}
                className="btn btn-danger ms-4"
                type="button"
              >
                Logout
              </button>
            </li>
          
        </div>
      </div>
    </nav>
 */