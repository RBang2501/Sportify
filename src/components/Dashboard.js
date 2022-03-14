import React from "react";
// styles
import "../styles/card.tile.css";
// // import "../styles/font-awesome.css"

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


export const Dashboard = () => {
  return (
    <>
    <div className="main-banner" id="top">
        <img src={spandanImg} />
    </div>
    
    <section className="section" id="features">

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
                <a href="https://www.w3schools.com/html/html_css.asp">
                <figure className="card">
                    <img src={footballImg} />
                    <figcaption>Football</figcaption>
                </figure>
            </a>
                

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={badmintonDoublessImg} />
                        <figcaption>Badminton</figcaption>
                    </figure>
                </a>

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        {/* <img src="./assets/basketball.svg" /> */}
                        <img src={basketballImg}/>
                        <figcaption>Basketball</figcaption>
                    </figure>
                </a>

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={tennisDoublesImg} />
                        <figcaption>Lawn Tennis</figcaption>
                    </figure>
                </a>

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={cricketImg} />
                        <figcaption>Cricket</figcaption>
                    </figure>
                </a>

            </div>


            <div className="cards">
                
                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={tableTennisDoublesImg} />
                        <figcaption>Table Tennis</figcaption>
                    </figure>
                </a>

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={volleyballImg} />
                        <figcaption>Volleyball</figcaption>
                    </figure>
                </a>
                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={tugOfWarImg} />
                        <figcaption>Tug Of War</figcaption>
                    </figure>
                </a>

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={carromImg} />
                        <figcaption>Carrom</figcaption>
                    </figure>
                </a>


                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={gullyCricketImg} />
                        <figcaption>Gully Cricket</figcaption>
                    </figure>
                </a>

            </div>
        </div>

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

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={badmintonSinglesImg} />
                        <figcaption>Badminton</figcaption>
                    </figure>
                </a>

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={tableTennisSinglesImg} />
                        <figcaption>Table Tennis</figcaption>
                    </figure>
                </a>

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={chessImg} />
                        <figcaption>Chess</figcaption>
                    </figure>
                </a>

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={gymEventImg} />
                        <figcaption>Gym Event</figcaption>
                    </figure>
                </a>

            </div>
        </div>


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

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={valorantImg} />
                        <figcaption>Valorant</figcaption>
                    </figure>
                </a>

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={fifaImg} />
                        <figcaption>FIFA</figcaption>
                    </figure>
                </a>

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={codImg} />
                        <figcaption>COD</figcaption>
                    </figure>
                </a>

                <a href="https://www.w3schools.com/html/html_css.asp">
                    <figure className="card">
                        <img src={pubgImg} />
                        <figcaption>PUB-G</figcaption>
                    </figure>
                </a>

            </div>
        </div>


    </section>
</>
  );
};