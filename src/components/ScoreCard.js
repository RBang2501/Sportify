import React from "react";
import "../styles/SportMenu.css";
import { Link } from "react-router-dom";
import "../styles/Scorecard.css"

export const ScoreCard = () => {
  return (
  <div style={{marginTop: "15%"}}>
      <div className="row1-container">
        <div className="box box-down cyan">
            <h2>Team-A</h2>
            <div className="updateScore">
                <div className="fields">Name-A<input id="TeamName1"/></div>
                <div className="fields">Enter Score Set 1<input id="team11"/></div>
                <div className="fields">Enter Score Set 2<input id="team12"/></div>
                <div className="fields">Enter Score Set 3<input id="team13"/></div>
            </div>
        </div>

        <div className="box box-down blue">
            <h2>Team-B</h2>
            <div className="updateScore">
                <div className="fields">Name-A<input id="TeamName2"/></div>
                <div className="fields">Enter Score Set 1<input id="team21"/></div>
                <div className="fields">Enter Score Set 2<input id="team22"/></div>
                <div className="fields">Enter Score Set 3<input id="team23"/></div>
            </div>
        </div>
    </div>

    <div className="row1-container toolbar">
        <input type="submit" id="butt" className="btn btn_live" value="Update"/>
    </div>
  </div>
);};
