import React from 'react'
import "../styles/SportMenu.css"
import { Link } from 'react-router-dom'
import { currSport } from './Dashboard';

const rules = {
    'Football': 'https://drive.google.com/file/d/1IjPWc6wYq0zMhdSyRZQkMoHZEJbk8ZlL/view?usp=sharing',
    'Badminton Doubles': 'https://drive.google.com/file/d/1OtDPDps_mqGYts_E7ngqX9i2C8Weqbqn/view?usp=sharing',
    // 'Basketball': basketballRules,
    'Tennis Doubles': 'https://drive.google.com/file/d/1aC5w_6sw0bL8rcIVruFebCHYtOHy008a/view?usp=sharing',
    // 'Cricket': cricketRules,
    'Table Tennis Doubles': 'https://drive.google.com/file/d/1gMRfBI25FdmRAY5_C-oUYJDCELeCjsxO/view?usp=sharing',
    // 'Volleyball': volleyballRules,
    // 'Tug Of War': towRules,
    'Carrom': 'https://drive.google.com/file/d/1bmPhv8UgXv7gIaI_Zo_M3Ux0M7ztHUFI/view?usp=sharing',
    'Gully Cricket': 'https://drive.google.com/file/d/1j56JcpU6xU9zBbiZmaAE_KhrcTEz4RAI/view?usp=sharing',
    'Foosball': 'https://drive.google.com/file/d/17zz6mqgNApEVZbAe6chmiId3138u4tao/view?usp=sharing',
    "Badminton Singles":'https://drive.google.com/file/d/1OtDPDps_mqGYts_E7ngqX9i2C8Weqbqn/view?usp=sharing',
    "Table Tennis Singles":'https://drive.google.com/file/d/1gMRfBI25FdmRAY5_C-oUYJDCELeCjsxO/view?usp=sharing', 
    // "Chess":'',
    // "Gym Event":''
};

export const Menu = () => {
    const handleClick = () => {
        window.open(rules[currSport[0]]);
    };
    return (
    <div className="a" style={{marginTop: "60%"}}>
        <main className="leaderboard__profiles">
            <Link to="/register-for-sport" role="button" className="leaderboard__name button__link">
                <article className="leaderboard__profile" id="menu_item0">
                    Create team
                </article> 
                
            </Link>
            <Link to="/registered-teams" role="button" className="leaderboard__name button__link">
                <article className="leaderboard__profile" id="menu_item1">
                    View Teams
                </article>
                
            </Link>
            <Link to="/score-card" role="button" className="leaderboard__name button__link">
                <article className="leaderboard__profile" id="menu_item2">
                    Fixtures
                </article> 
            </Link>
            <div className="leaderboard__name button__link">
            <article className="leaderboard__profile" id="menu_item3" onClick={handleClick}>
                Rules
            </article> 
            </div>
        </main> 
    </div>
  )
}