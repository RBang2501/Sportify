import React from 'react'
import "../styles/createFixtures.css"

export const CreateFixtures = () => {

  return (
    <div style={{marginTop: "20%"}}>
        <header></header>
        <main className="leaderboard__profiles">
            <div className="leaderboard__name button__link">
                <input type="text" className="leaderboard__profile" id="t11" placeholder="Team-1"/>
                <p style={{display: "inline-flex"}}>V/S</p>
                <input type="text" className="leaderboard__profile" id="t12" placeholder="Team-2"/>
                <input type="text" className="leaderboard__profile" id="t1" placeholder="Time"/>
                <input type="text" className="leaderboard__profile" id="d1" placeholder="Date"/>
                <button className="Submit" id="butt1">Create Fixtures</button>
            </div>
        </main>
    </div>
  )
}
