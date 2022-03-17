import React from "react";
import { Link } from "react-router-dom";

export const NavBeforeLogin = () => {
  return (
    <header
      className="header-area  header-sticky"
      style={{ top: "0", position: "fixed", backgroundColor: "white" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                Sport <em> ify </em>
              </a>
              <ul className="nav">
                <li className="scroll-to-section">
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact-us"> Contact </a>
                </li>
                <li className="main-button">
                  <Link to="/signup"> Sign Up </Link>
                </li>
              </ul>
              <a className="menu-trigger">
                <span> Menu </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
