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
     <div className="container">
       <div className="row">
         <div className="col-12">
           <nav className="main-nav">
             <a href="/" className="logo">
             {/* font-family: 'Poppins', sans-serif; */}
               Sport <em> ify </em>
             </a>
             <ul className="nav" style={{"display":"none"}}>
               <li className="scroll-to-section">
                
                 <Link to="/" className="active">
                  
                   Home
                 </Link>
               </li>
               <li className="scroll-to-section">
                
                 <a href="#TeamSports"> Team Sports </a>
               </li>
               <li className="scroll-to-section">
                
                 <a href="#SinglePlayer"> Single Player </a>
               </li>
               <li className="scroll-to-section">
                
                 <a href="#ESports"> E - Sports </a>
               </li>
               <li className="scroll-to-section">
                
                 <Link to="#"> Contact </Link>
               </li>
               <li className="main-button" onClick={handleLogout}>
                
                 <Link to="/"> Logout </Link>
               </li>
             </ul>
             <a className="menu-trigger active">
               <span> Menu </span>
             </a>
           </nav>
         </div>
       </div>
     </div>
   </header>
 );
};