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
         <a className="navbar-brand" href="#" style={{
           fontSize: "32px",
           fontWeight: "800",
           textTransform: "uppercase",
           fontFamily: 'Poppins',
         }}>
           SPORT <em style={{ color: "#ed563b", fontStyle: 'normal' }}>IFY</em>
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
             <li className="nav-item" style={{minWidth:"100px"}}>
               <Link className="nav-link active" aria-current="page" to="/" style={{
                 fontWeight: "500",
                 fontsize: "17px",
                 fontFamily: 'Poppins',
                 textTransform: "uppercase"
               }}>
                 Dashboard
               </Link>
             </li>
             <li className="nav-item" style={{minWidth:"127px"}}>
               <a className="nav-link" href="#TeamSports" style={{
                 fontWeight: "500",
                 fontsize: "17px",
                 fontFamily: 'Poppins',
                 textTransform: "uppercase"
               }}> Team Sports </a>
             </li>
             <li className="nav-item" style={{minWidth:"134px"}}>
               <a className="nav-link" href="#SinglePlayer" style={{
                 fontWeight: "500",
                 fontsize: "17px",
                 fontFamily: 'Poppins',
                 textTransform: "uppercase"
               }}> Single Player </a>
             </li>
             <li className="nav-item" style={{minWidth:"107px"}}>
               <a className="nav-link" href="#ESports" style={{
                 fontWeight: "500",
                 fontsize: "17px",
                 fontFamily: 'Poppins',
                 textTransform: "uppercase"
               }}> E - Sports </a>
             </li>
             <li className="nav-item" style={{minWidth:"110px"}}>
               <a className="nav-link" href="#Contact" style={{
                 fontWeight: "500",
                 fontsize: "17px",
                 fontFamily: 'Poppins',
                 textTransform: "uppercase"
               }}> Contact </a>
             </li>
           </ul>
           <li className="nav-item"  style={{ minWidth:"120px" }}>
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