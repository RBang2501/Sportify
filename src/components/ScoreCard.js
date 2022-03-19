import React from "react";
import "../styles/SportMenu.css";
import { Link } from "react-router-dom";
import "../styles/Scorecard.css"
import { getDatabase, ref, set, push, update } from "firebase/database";
import { useAuth } from "../context/AuthContext";

export const ScoreCard = () => {
    const { currentUser } = useAuth();

    async function addFixture(e){
            e.preventDefault()
            var TeamName1 = document.getElementById('TeamName1').value;
            var TeamName2 = document.getElementById('TeamName2').value;

            var team11 = document.getElementById('team11').value;
            var team12 = document.getElementById('team12').value;
            var team13 = document.getElementById('team13').value;
            var team21 = document.getElementById('team21').value;
            var team22 = document.getElementById('team22').value;
            var team23 = document.getElementById('team23').value;

            const database = getDatabase();
            update(ref(database, `Basketball/Fixture/${TeamName1}`), {
                TeamA: TeamName1,
                TeamB: TeamName2,
                Aset1: team11,
                Aset2: team12,
                Aset3: team13,
                Bset1: team21,
                Bset2: team22,
                Bset3: team23
            });
    }

  return (
      <>
      {currentUser ? 
<>
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
        <input type="submit" onClick={addFixture} id="butt" className="btn btn_live" value="Update"/>
    </div>
</div>
</> : <></>}
</>
);};
