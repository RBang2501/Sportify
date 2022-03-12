import React from "react";
import { Link } from "react-router-dom";

export const NavBeforeLogin = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Globetrot
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
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ marginLeft: "70vw" }}
                type="button"
                className="btn btn-success"
                to="/signup"
              >
                Sign Up
              </Link>
              <Link
                style={{ marginLeft: "10px" }}
                type="button"
                className="btn btn-primary"
                to="/login"
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
