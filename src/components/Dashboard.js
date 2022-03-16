import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// styles
import "../styles/card.tile.css";

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
import volleyballImg from '../assets/volleyball.jpg'
import tugOfWarImg from '../assets/tug-of-war.jpg'
import carromImg from '../assets/carrom.jpeg'
import chessImg from '../assets/chess.jpg'
import gymEventImg from '../assets/gym-event.svg'
import valorantImg from '../assets/valorant.jpeg'
import fifaImg from '../assets/FIFA.png'
import codImg from '../assets/COD.jpeg'
import pubgImg from '../assets/PUBG.jpeg'

// Images Array
const DoublesSportImgs = [footballImg, badmintonSinglesImg, basketballImg, tennisDoublesImg, cricketImg, tableTennisDoublesImg, volleyballImg, tugOfWarImg, carromImg, gullyCricketImg];
const SinglesSportImgs = [badmintonSinglesImg, tableTennisSinglesImg, chessImg, gymEventImg];
const EsportImgs = [valorantImg, fifaImg, codImg, pubgImg];

// Sports names
const doubleSports = [ "Football", "Badminton Doubles", "Basketball", "Tennis Doubles", "Cricket", "Table Tennis Doubles", "Volleyball", "Tug Of War", "Carrom", "Gully Cricket"];
const singleSports = [ "Badminton Singles", "Table Tennis Singles", "Chess", "Gym Event"];
const ESports = ["Valorant", "FIFA", "COD", "PUB-G"];

export var currSport = [];
const allowedTeamPlayers = [9, 2, 7, 2, 11, 2, 8, 8, 2, 6];
const allowedESportPlayers = [5, 2, 5, 4];

export const Dashboard = () => {
    const { currentUser } = useAuth();

  return (
    <>
    {/* Banner */}
    <div className="main-banner" id="top">
        <img src={spandanImg} style={{width: "100%"}}/>
    </div>

    {currentUser ? 
    <section className="section" id="features">
        {/* Team Sports */}
        <div className="container" id="TeamSports">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h2>Team <em> Sports</em></h2>
                        <img src={lineDecImg} alt="waves"/>
                        <p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use
                            this layout for your business website.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapperCard">
            <div className="cards">
                {doubleSports.map((value, index) => {
                    return (<Link to="register-for-sport" onClick={function(){currSport = [value, allowedTeamPlayers[index], "team"]}}>
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
                        <img src={lineDecImg} alt="waves"/>
                        <p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use
                            this layout for your business website.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapperCard">
            <div className="cards">
                {singleSports.map((value, index) => {
                    return (<Link to="register-for-sport" onClick={function(){currSport = [value, 1, "single"]}}>
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
                        <img src={lineDecImg} alt="waves"/>
                        <p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use
                            this layout for your business website.</p>
                    </div>
                </div>

            </div>
        </div>
        
        <div className="wrapperCard">
            <div className="cards">
                {ESports.map((value, index) => {
                    return (<Link to="register-for-sport" onClick={function(){currSport = value}}>
                    <figure className="card">
                        <img src={EsportImgs[index]} />
                        <figcaption>{value}</figcaption>
                    </figure>
                    </Link>)
                })}
            </div>
        </div>
    </section>
    : <></>}
</>
  );
};