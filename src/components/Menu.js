import React from "react";
import "../styles/SportMenu.css";
import { Link } from "react-router-dom";
import { currSport } from "./Dashboard";
import SpandanLogo from "../assets/spandan-removebg.png";
import { isAdmin } from "./Login";

const rules = {
  'Football':
    "https://drive.google.com/file/d/1IjPWc6wYq0zMhdSyRZQkMoHZEJbk8ZlL/view?usp=sharing",
  "Badminton Doubles":
    "https://drive.google.com/file/d/1OtDPDps_mqGYts_E7ngqX9i2C8Weqbqn/view?usp=sharing",
  'Basketball': 'https://drive.google.com/file/d/1u2O2DPWpgK7qgMCq957guqrVs4D0neBx/view?usp=sharing',
  "Tennis Doubles":
    "https://drive.google.com/file/d/1aC5w_6sw0bL8rcIVruFebCHYtOHy008a/view?usp=sharing",
  'Cricket': 'https://drive.google.com/file/d/1u2UQjZoYRtn3L5leeYMu7LmJRy6bKru4/view?usp=sharing',
  "Table Tennis Doubles":
    "https://drive.google.com/file/d/1gMRfBI25FdmRAY5_C-oUYJDCELeCjsxO/view?usp=sharing",
  'Volleyball': 'https://drive.google.com/file/d/1kAh0qqTXKnfCNOHx86Ii2iHqxb878rRH/view?usp=sharing',
  'Tug Of War': 'https://drive.google.com/file/d/13gGeZoXTlmb_w3THDWXe9peqoupsvrwZ/view?usp=sharing',
  'Carrom':
    "https://drive.google.com/file/d/1bmPhv8UgXv7gIaI_Zo_M3Ux0M7ztHUFI/view?usp=sharing",
  "Gully Cricket":
    "https://drive.google.com/file/d/1j56JcpU6xU9zBbiZmaAE_KhrcTEz4RAI/view?usp=sharing",
  'Foosball':"https://drive.google.com/file/d/17zz6mqgNApEVZbAe6chmiId3138u4tao/view?usp=sharing" ,
  "Badminton Singles":
    "https://drive.google.com/file/d/1OtDPDps_mqGYts_E7ngqX9i2C8Weqbqn/view?usp=sharing",
  "Table Tennis Singles":
    "https://drive.google.com/file/d/1gMRfBI25FdmRAY5_C-oUYJDCELeCjsxO/view?usp=sharing",
  "Chess":'https://drive.google.com/file/d/1HnxWtexlRo1WnlJT9H-h-JCZop7X-tct/view?usp=sharing',
  // "Gym Event":''
};
export const Menu = () => {
  const handleClick = () => {
    window.open(rules[currSport[0]]);
  };

  return (
    <div className="menu-a">
      <div className="menu-bgimg">
        <img
          className="menu-source-bgimg"
          src={SpandanLogo}
          alt="SpandanLogo"
        />
      </div>
      <main className="leaderboard__profiles">
        <Link
          to="/register-for-sport"
          role="button"
          className="leaderboard__name button__link"
        >
          <article className="leaderboard__profile" id="menu_item0">
            Create team
          </article>
        </Link>
        <Link
          to="/registered-teams"
          role="button"
          className="leaderboard__name button__link"
        >
          <article className="leaderboard__profile" id="menu_item1">
            View Teams
          </article>
        </Link>
        <div className="leaderboard__name button__link">
          <article
            className="leaderboard__profile"
            id="menu_item3"
            onClick={handleClick}
          >
            Rules
          </article>
        </div>
        {isAdmin ? <Link to="create-fixtures" role="button" className="leaderboard__name button__link">
          <article className="leaderboard__profile" id="menu_item2">
            Create Fixtures
          </article>
        </Link> :
        <Link to="view-fixtures">
          <article className="leaderboard__profile" id="menu_item2">
            Fixtures
          </article>
        </Link>}

      </main>
    </div>
  );
};
