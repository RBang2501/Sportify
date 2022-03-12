import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import img from "../profile_picture_svg.svg"
import "../styles/templatemo-training-studio.css"
import "../styles/card.tile.css"
// import "../styles/font-awesome.css"
import "../styles/bootstrap.min.css"

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
    <>
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <a href="index.html" className="logo">Sport<em>ify</em></a>
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                            <li className="scroll-to-section"><a href="#features">About</a></li>
                            <li className="scroll-to-section"><a href="#our-classNamees">Classes</a></li>
                            <li className="scroll-to-section"><a href="#schedule">Schedules</a></li>
                            <li className="scroll-to-section"><a href="#contact-us">Contact</a></li>
                            <li className="main-button"><a href="#">Sign Up</a></li>
                            <li className="main-button"><a href="#">Log In</a></li>
                        </ul>
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
        </header>

        <div class="main-banner" id="top">
        <video autoplay muted loop id="bg-video">
            <source src="assets/images/gym-video.mp4" type="video/mp4" />
        </video>

        <div class="video-overlay header-text">
            <div class="caption">
                <h6>work harder, get stronger</h6>
                <h2>easy with our <em>gym</em></h2>
                <div class="main-button scroll-to-section">
                    <a href="#features">Become a member</a>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};
