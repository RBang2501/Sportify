import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
    getDatabase,
    ref,
    update,
    child,
    get,
    set
  } from "firebase/database";

// styles
import "../styles/card.tile.css";
// import "../styles/card.tile.hower.css";
import "../styles/templatemo-training-studio.css"
import "../styles/font-awesome.css"
import "../styles/bootstrap.min.css"

// images
import spandanImg from "../assets/spandan.jpeg"
import lineDecImg from '../assets/line-dec.png'
import footballImg from "../assets/football.svg"
import badmintonSinglesImg from "../assets/badminton-singles.jpg"
import badmintonDoublessImg from "../assets/badminton-doubles.png"
import basketballImg from '../assets/basketball.svg'
import tennisSinglesImg from '../assets/tennis-singles.jpg'
import tennisDoublesImg from '../assets/tennis-doubles.svg'
import cricketImg from '../assets/cricket.jpg'
import gullyCricketImg from '../assets/gully-cricket.png'
import tableTennisDoublesImg from '../assets/table-tennis-doubles.jpg'
import tableTennisSinglesImg from '../assets/table-tennis-singles.jpg'
import volleyballImg from '../assets/volley-smash.jpg'
import tugOfWarImg from '../assets/tug-of-war.jpg'
import carromImg from '../assets/carrom-aesthetic.jpg'
import chessImg from '../assets/chess.jpg'
import gymEventImg from '../assets/gym-event.svg'
import valorantImg from '../assets/valorant.jpeg'
import fifaImg from '../assets/FIFA.png'
import codImg from '../assets/COD.jpeg'
import pubgImg from '../assets/PUBG.jpeg'

import Anurag from "../assets/Team/Anurag.jpeg"
import Jainav from "../assets/Team/Jainav.jpg"
import Arya from "../assets/Team/AryaSqr.jpg"
import Rahul from "../assets/Team/RahulMountain.jpg"
import Rakshit from "../assets/Team/RakshitDhup.png"

// Images Array
const DoublesSportImgs = [footballImg, badmintonSinglesImg, basketballImg, tennisDoublesImg, cricketImg, tableTennisDoublesImg, volleyballImg, tugOfWarImg, carromImg, gullyCricketImg];
const SinglesSportImgs = [badmintonSinglesImg, tableTennisSinglesImg, chessImg, gymEventImg];
const EsportImgs = [valorantImg, fifaImg, codImg, pubgImg];
 
// Sports names
const doubleSports = ["Football", "Badminton Doubles", "Basketball", "Tennis Doubles", "Cricket", "Table Tennis Doubles", "Volleyball", "Tug Of War", "Carrom", "Gully Cricket"];
const singleSports = ["Badminton Singles", "Table Tennis Singles", "Chess", "Gym Event"];
const ESports = ["Valorant", "FIFA", "COD", "PUB-G"];
 
const maxTeamPlayers = [9, 2, 7, 2, 11, 2, 8, 8, 2, 6];
const minTeamPlayers = [6, 2, 5, 2, 7, 2, 6, 6, 2, 4];

export var currSport = [];
 
export const Dashboard = () => {
   const { currentUser } = useAuth();
   const [CurrSport,setCurrSport]=useState(['','','','']);

   return (
       <>
           {/* Banner */}
           <div className="main-banner" id="top">
               <img src={spandanImg} style={{ width: "100%" }} />
           </div>
 
           {currentUser ?
               <>
                   <section className="section" id="features">
                       {/* Team Sports */}
                       <div className="container" id="TeamSports">
                           <div className="row">
                               <div className="col-lg-6 offset-lg-3">
                                   <div className="section-heading">
                                       <h2>Team <em> Sports</em></h2>
                                       <img src={lineDecImg} alt="waves" />
                                       {/* <img src={lineDecImg} alt="waves"/> */}
                                       {/* <p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use
                           this layout for your business website.</p> */}
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="wrapperCard">
                           <div className="cards">
                               {doubleSports.map((value, index) => {
                                   return (<Link to="sport-menu" 
                                   onClick={
                                       function (){ 
                                    //    setCurrSport(()=>[value, maxTeamPlayers[index], minTeamPlayers[index],"team"])}
                                        currSport = [value, maxTeamPlayers[index], minTeamPlayers[index], "team"]}}>

                                       <figure className="card">
                                           <img src={DoublesSportImgs[index]} />
                                           <figcaption>{value}</figcaption>
                                       </figure>
                                   </Link>)
                               })}
                           </div>
                       </div>
 
                       {/* Single Sports */}
                       <div className="container" id="SinglePlayer">
                           <div className="row">
                               <div className="col-lg-6 offset-lg-3">
                                   <div className="section-heading">
                                       <h2>Single <em> Player</em></h2>
                                       <img src={lineDecImg} alt="waves" />
                                       {/* <img src={lineDecImg} alt="waves"/> */}
                                       {/* <p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use
                           this layout for your business website.</p> */}
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="wrapperCard">
                           <div className="cards">
                               {singleSports.map((value, index) => {
                                   return (<Link to="sport-menu" onClick={function (){ setCurrSport(()=>[value, 1, 1,"single"])}}>
                                       <figure className="card">
                                           <img src={SinglesSportImgs[index]} />
                                           <figcaption>{value}</figcaption>
                                       </figure>
                                   </Link>)
                               })}
                           </div>
                       </div>
 
                       {/* E Sports */}
                       <div className="container" id="ESports">
                           <div className="row">
                               <div className="col-lg-6 offset-lg-3">
                                   <div className="section-heading">
                                       <h2>E - <em> Sports</em></h2>
                                       <img src={lineDecImg} alt="waves" />
                                       {/* <img src={lineDecImg} alt="waves"/> */}
                                       {/* <p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use
                           this layout for your business website.</p> */}
                                   </div>
                               </div>
 
                           </div>
                       </div>
 
                       <div className="wrapperCard">
                           <div className="cards">
                               {ESports.map((value, index) => {
                                   return (<Link to="sport-menu" onClick={function () { currSport = value }}>
                                       <figure className="card">
                                           <img src={EsportImgs[index]} />
                                           <figcaption>{value}</figcaption>
                                       </figure>
                                   </Link>)
                               })}
                           </div>
                       </div>
                   </section>
 
 
 
                   {/* //Testimonials */}
               </>
 
               : <div className="d-flex justify-content-around align-items-center mb-4" style={{marginTop: "10px", padding: "5px"}}>
               <Link to="/signup">
                <button
                    className="btn btn-danger ms-4"
                    type="button"
                >
                    Signin
                </button>
                </Link>
               </div>}
            <>
               <section className="section">
                        <div className="container" id="Contact">
                           <div className="row">
                               <div className="col-lg-6 offset-lg-3">
                                   <div className="section-heading">
                                       <h2>Team<em> Details</em></h2>
                                       <img src={lineDecImg} alt="waves" />
                                   </div>
                               </div>
                           </div>
                        </div>
                        <div className="container py-5">
                           <div className="row text-center">
                            <div className="col-xl-3 col-sm-6 mb-5">
                                   <div className="bg-white rounded shadow-sm py-5 px-4"><img src={Anurag} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                       <h5 className="mb-0">Anurag Naruka</h5>
                                       <ul className="social mb-0 list-inline mt-3">
                                          
                                           <li className="list-inline-item"><a href="https://www.instagram.com/anurag.singh.naruka/" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                           <li className="list-inline-item"><a href="https://www.linkedin.com/in/anurag-singh-naruka-7857a7208/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="col-xl-3 col-sm-6 mb-5">
                                   <div className="bg-white rounded shadow-sm py-5 px-4"><img src={Rakshit} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                       <h5 className="mb-0">Rakshit Bang</h5>
                                       <ul className="social mb-0 list-inline mt-3">
                                          
                                           <li className="list-inline-item"><a href="https://www.instagram.com/rakshit_bang/" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                           <li className="list-inline-item"><a href="https://www.linkedin.com/in/rakshitbang/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                       </ul>
                                   </div>
                               </div>
                               {/* <!-- Team item--> */}
                               <div className="col-xl-3 col-sm-6 mb-5">
                                   <div className="bg-white rounded shadow-sm py-5 px-4"><img src={Rahul} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                       <h5 className="mb-0">Rahul Jain</h5>
                                       <ul className="social mb-0 list-inline mt-3">
                                          
                                           <li className="list-inline-item"><a href="https://www.instagram.com/rahuljain_78/" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                           <li className="list-inline-item"><a href="https://www.linkedin.com/in/rahul-jain-8749a01b7/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                       </ul>
                                   </div>
                               </div>
                               {/* <!-- End--> */}
 
                               {/* <!-- Team item--> */}
                               <div className="col-xl-3 col-sm-6 mb-5">
                                   <div className="bg-white rounded shadow-sm py-5 px-4"><img src={Arya} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                       <h5 className="mb-0">Arya Kondawar</h5>
                                       <ul className="social mb-0 list-inline mt-3">
                                          
                                           <li className="list-inline-item"><a href="https://www.instagram.com/arya_kondawar/" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                           <li className="list-inline-item"><a href="https://www.linkedin.com/in/arya-kondawar-212591205/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                       </ul>
                                   </div>
                               </div>
                               {/* <!-- End--> */}
 
                               {/* <!-- Team item--> */}
                              
                               {/* <!-- End--> */}
 
                               {/* <!-- Team item--> */}
                              
                               {/* <!-- End--> */}
                               <div className="col-xl-3 col-sm-6 mb-5">
                                   <div className="bg-white rounded shadow-sm py-5 px-4"><img src={Jainav} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                       <h5 className="mb-0">Jainav Sanghvi</h5>
                                       <ul className="social mb-0 list-inline mt-3">
                                          
                                           <li className="list-inline-item"><a href="https://www.instagram.com/jainav_sanghvi10/" className="social-link"><i className="fa fa-instagram"></i></a></li>
                                           <li className="list-inline-item"><a href="https://www.linkedin.com/in/jainav-sanghvi-933a8a1b8/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                </section>
            </></>
   );
};
 

