import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
 
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
// import codImg from '../assets/COD.jpeg'
import pubgImg from '../assets/PUBG.jpeg'
import foosballImg from '../assets/foosball.jpeg'
import csgoImg from '../assets/CSGO.jpg'
 
import Anurag from "../assets/Team/Anurag.jpeg"
import Jainav from "../assets/Team/Jainav.jpg"
import Arya from "../assets/Team/AryaSqr.jpg"
import Rahul from "../assets/Team/RahulMountain.jpg"
import Rakshit from "../assets/Team/RakshitDhup.png"
 
// Images Array
const DoublesSportImgs = [tennisDoublesImg, footballImg, badmintonDoublessImg, badmintonDoublessImg, badmintonDoublessImg, basketballImg, basketballImg, cricketImg, tableTennisDoublesImg, volleyballImg, tugOfWarImg, carromImg, gullyCricketImg, foosballImg];
const SinglesSportImgs = [tennisSinglesImg, badmintonSinglesImg, badmintonSinglesImg, tableTennisSinglesImg, tableTennisSinglesImg, chessImg, gymEventImg];
const EsportImgs = [valorantImg, fifaImg, csgoImg, pubgImg];
 
// Sports names
const doubleSports = ["Tennis Doubles", "Football", "Badminton Men Doubles", "Badminton Women Doubles", "Badminton Mixed Doubles", "Basketball 3v3", "Basketball 5v5", "Cricket", "Table Tennis Doubles", "Volleyball", "Tug Of War", "Carrom", "Gully Cricket", "Foosball"];
const singleSports = ["Tennis Singles", "Badminton Men Singles", "Badminton Women Singles", "T.T. Men Singles", "T.T. Women Singles", "Chess", "Gym Event"];
const ESports = ["Valorant", "FIFA", "CSGO", "PUB-G"];
 
export var currSport = [];
const maxTeamPlayers = [2, 9, 2, 2, 2, 3, 6, 12, 2, 8, 8, 8, 2, 6, 2];
const minTeamPlayers = [2, 7, 2, 2, 2, 4, 8, 10, 2, 7, 6, 8, 2, 5, 2];
 
const maxETeamPlayers = [5, 5, 5, 5];
const minETeamPlayers = [5, 5, 5, 5];
 
 
export const Dashboard = () => {
   const { currentUser } = useAuth();
   // window.addEventListener("scroll", reveal);
   //   reveal();
 
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
                                       <img src={lineDecImg} alt="waves" />
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
                                   return (<Link to="sport-menu" onClick={function () {
                                       currSport = [value, maxTeamPlayers[index], minTeamPlayers[index], "team"];
                                   }}>
                                       <figure className="card">
                                           <img src={DoublesSportImgs[index]} />
                                           <figcaption style={{ transform: "none", fontSize: "smaller" }}>{value}</figcaption>
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
                                       <img src={lineDecImg} alt="waves" />
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
                                   return (<Link to="sport-menu" onClick={function () { currSport = [value, 1, 1,"single"] }}>
                                       <figure className="card">
                                           <img src={SinglesSportImgs[index]} />
                                           <figcaption style={{ transform: "none", fontSize: "smaller" }}>{value}</figcaption>
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
                                       <img src={lineDecImg} alt="waves" />
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
                                   return (<Link to="sport-menu" onClick={function () { currSport = [value,maxETeamPlayers[index],minETeamPlayers[index],'team'] }}>
                                       <figure className="card">
                                           <img src={EsportImgs[index]} />
                                           <figcaption style={{ transform: "none", fontSize: "smaller" }}>{value}</figcaption>
                                       </figure>
                                   </Link>)
                               })}
                           </div>
                       </div>
                   </section>
 
 
 
                   {/* //Testimonials */}
               </>
 
               : <div className="d-flex justify-content-around align-items-center mb-4" style={{ marginTop: "10px", padding: "5px" }}>
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
                                   <img src={lineDecImg} alt="waves" />
                                   <h2><em>{"\{ "}</em>Creators<em>{" \}"}</em></h2>
                                   <img src={lineDecImg} alt="waves" />
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="container py-5">
                       <div className="row text-center">
                           <div className="col-xl-3 col-sm-6 mb-5 col-6">
                               <div className="bg-white rounded shadow-sm"><img src={Anurag} alt="" width="75%" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                   <h5 className="mb-0">Anurag Naruka</h5>
                                   <ul className="social mb-0 list-inline mt-3">
 
                                       <li className="list-inline-item"><a href="https://www.instagram.com/anurag.singh.naruka/" className="social-link"><i className="fa fa-instagram" style={{color:"black"}}></i></a></li>
                                       <li className="list-inline-item"><a href="https://www.linkedin.com/in/anurag-singh-naruka-7857a7208/" className="social-link"><i className="fa fa-linkedin" style={{color:"black"}}></i></a></li>
                                       {/* <li className="list-inline-item"><a href="tel:9413352325" className="social-link"><i className="fa fa-phone"></i></a></li> */}
                                       <li className="list-inline-item"><a href="https://chat.whatsapp.com/E3kLk7Ag5kfJH7RLTkSsid" className="social-link"><i className="fa fa-whatsapp" style={{color:"black"}}></i></a></li>
                                       <li className="list-inline-item"><a href="mailto:Anurag.Singh.Naruka@iiitb.ac.in" className="social-link"><i className="fa fa-envelope" style={{color:"black"}}></i></a></li>
 
                                   </ul>
                               </div>
                           </div>
                           <div className="col-xl-3 col-sm-6 mb-5 col-6">
                               <div className="bg-white rounded shadow-sm"><img src={Rakshit} alt="" width="75%" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                   <h5 className="mb-0">Rakshit Bang</h5>
                                   <ul className="social mb-0 list-inline mt-3">
 
                                       <li className="list-inline-item"><a href="https://www.instagram.com/rakshit_bang/" className="social-link"><i className="fa fa-instagram" style={{color:"black"}}></i></a></li>
                                       <li className="list-inline-item"><a href="https://www.linkedin.com/in/rakshitbang/" className="social-link"><i className="fa fa-linkedin" style={{color:"black"}}></i></a></li>
                                       {/* <li className="list-inline-item"><a href="tel:7249338227" className="social-link"><i className="fa fa-phone"></i></a></li> */}
                                       <li className="list-inline-item"><a href="https://chat.whatsapp.com/E3kLk7Ag5kfJH7RLTkSsid" className="social-link"><i className="fa fa-whatsapp" style={{color:"black"}}></i></a></li>
                                       <li className="list-inline-item"><a href="mailto:Rakshit.Bang@iiitb.ac.in" className="social-link"><i className="fa fa-envelope" style={{color:"black"}}></i></a></li>
                                   </ul>
                               </div>
                           </div>
                           {/* <!-- Team item--> */}
                           <div className="col-xl-3 col-sm-6 mb-5 col-6">
                               <div className="bg-white rounded shadow-sm"><img src={Rahul} alt="" width="75%" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                   <h5 className="mb-0">Rahul Jain</h5>
                                   <ul className="social mb-0 list-inline mt-3">
 
                                       <li className="list-inline-item"><a href="https://www.instagram.com/rahuljain_78/" className="social-link"><i className="fa fa-instagram" style={{color:"black"}}></i></a></li>
                                       <li className="list-inline-item"><a href="https://www.linkedin.com/in/rahul-jain-8749a01b7/" className="social-link"><i className="fa fa-linkedin" style={{color:"black"}}></i></a></li>
                                       {/* <li className="list-inline-item"><a href="tel:6376007428" className="social-link"><i className="fa fa-phone"></i></a></li> */}
                                       <li className="list-inline-item"><a href="https://chat.whatsapp.com/E3kLk7Ag5kfJH7RLTkSsid" className="social-link"><i className="fa fa-whatsapp" style={{color:"black"}}></i></a></li>
                                       <li className="list-inline-item"><a href="mailto:Rahul.Jain@iiitb.ac.in" className="social-link"><i className="fa fa-envelope" style={{color:"black"}}></i></a></li>
                                   </ul>
                               </div>
                           </div>
                           {/* <!-- End--> */}
 
                           {/* <!-- Team item--> */}
                           <div className="col-xl-3 col-sm-6 mb-5 col-6">
                               <div className="bg-white rounded shadow-sm"><img src={Arya} alt="" width="75%" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                   <h5 className="mb-0">Arya Kondawar</h5>
                                   <ul className="social mb-0 list-inline mt-3">
 
                                       <li className="list-inline-item"><a href="https://www.instagram.com/arya_kondawar/" className="social-link"><i className="fa fa-instagram" style={{color:"black"}}></i></a></li>
                                       <li className="list-inline-item"><a href="https://www.linkedin.com/in/arya-kondawar-212591205/" className="social-link"><i className="fa fa-linkedin" style={{color:"black"}}></i></a></li>
                                       {/* <li className="list-inline-item"><a href="tel:6300841030" className="social-link"><i className="fa fa-phone"></i></a></li> */}
                                       <li className="list-inline-item"><a href="https://chat.whatsapp.com/E3kLk7Ag5kfJH7RLTkSsid" className="social-link"><i className="fa fa-whatsapp" style={{color:"black"}}></i></a></li>
                                       <li className="list-inline-item"><a href="mailto:Arya.Kondawar@iiitb.ac.in" className="social-link"><i className="fa fa-envelope" style={{color:"black"}}></i></a></li>
                                   </ul>
                               </div>
                           </div>
                           {/* <!-- End--> */}
 
                           {/* <!-- Team item--> */}
 
                           {/* <!-- End--> */}
 
                           {/* <!-- Team item--> */}
 
                           {/* <!-- End--> */}
                           <div style={{display:"flex", justifyContent:"center"}}>
                           <div className="col-xl-3 col-sm-6 mb-5 col-6">
                               <div className="bg-white rounded shadow-sm"><img src={Jainav} alt="" width="75%" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                   <h5 className="mb-0">Jainav Sanghvi</h5>
                                   <ul className="social mb-0 list-inline mt-3">
 
                                       <li className="list-inline-item"><a href="https://www.instagram.com/jainav_sanghvi10/" className="social-link"><i className="fa fa-instagram" style={{color:"black"}}></i></a></li>
                                       <li className="list-inline-item"><a href="https://www.linkedin.com/in/jainav-sanghvi-933a8a1b8/" className="social-link"><i className="fa fa-linkedin" style={{color:"black"}}></i></a></li>
                                       <li className="list-inline-item"><a href="https://chat.whatsapp.com/E3kLk7Ag5kfJH7RLTkSsid" className="social-link"><i className="fa fa-whatsapp" style={{color:"black"}}></i></a></li>
                                       <li className="list-inline-item"><a href="mailto:Jainav.Sanghvi@iiitb.ac.in" className="social-link"><i className="fa fa-envelope" style={{color:"black"}}></i></a></li>
                                   </ul>
                               </div>
                           </div>
                           </div>
                          
                       </div>
                   </div>
               </section>
           </></>
   );
};
 
 
 

