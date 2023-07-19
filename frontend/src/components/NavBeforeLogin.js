import React from "react";
import { Link } from "react-router-dom";

export const NavBeforeLogin = () => {
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
             <li className="nav-item" style={{
               minWidth: "300px", display: "flex",
               justifyContent: "center"
             }}>
               <Link className="nav-link active" aria-current="page" to="/" style={{
                 fontWeight: "500",
                 fontsize: "17px",
                 fontFamily: 'Poppins',
                 textTransform: "uppercase"
               }}>
                 Dashboard
               </Link>
             </li>
 
             <li className="nav-item" style={{
               minWidth: "300px", display: "flex",
               justifyContent: "center"
             }}>
               <a className="nav-link" href="#Contact" style={{
                 fontWeight: "500",
                 fontsize: "17px",
                 fontFamily: 'Poppins',
                 textTransform: "uppercase"
               }}> Contact </a>
             </li>
           </ul>
           <ul className="navbar-nav" >
           <li className="nav-item" style={{
             minWidth: "200px", display: "flex",
             justifyContent: "center"
           }}>
             <Link to="/signup">
               <button
                 className="btn btn-danger ms-4"
                 type="button"
               >
                 Signin
               </button>
             </Link>
           </li>
           </ul>
 
         </div>
       </div>
     </nav>
   </header>
 );
};