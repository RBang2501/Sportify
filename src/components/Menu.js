import React from 'react'
import "../styles/SportMenu.css"
import { Link } from 'react-router-dom'

export const Menu = () => {
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
            <Link to="/score-set" role="button" className="leaderboard__name button__link">
                <article className="leaderboard__profile" id="menu_item3">
                    Rules
                </article> 
            </Link>
        </main> 
    </div>
  )
}