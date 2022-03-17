import React from "react";
import "../styles/SportMenu.css";
import { Link } from "react-router-dom";
import "../styles/Scorecard.css";
import {
  getDatabase,
  ref,
  set,
  push,
  update,
  get,
  child,
} from "firebase/database";

export const ScoreSet = () => {
  function fixtures() {
    var xxx = "BadBoys";
    // document.getElementById("butt").addEventListener("click", (e) => {
      // firebase.database().ref(`Basketball/Fixture/${xxx}`).get().then(snapshot => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Basketball/Fixture/${xxx}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          var TeamName1 = snapshot.val()["TeamA"];
          var TeamName2 = snapshot.val()["TeamB"];

          var team11 = snapshot.val()["Aset1"];
          var team12 = snapshot.val()["Aset2"];
          var team13 = snapshot.val()["Aset3"];
          var team21 = snapshot.val()["Bset1"];
          var team22 = snapshot.val()["Bset2"];
          var team23 = snapshot.val()["Bset3"];

          document.getElementById("TeamA").innerText = TeamName1;
          document.getElementById("TeamB").innerText = TeamName2;
          document.getElementById("setA1").innerText = team11;
          document.getElementById("setA2").innerText = team12;
          document.getElementById("setA3").innerText = team13;
          document.getElementById("setB1").innerText = team21;
          document.getElementById("setB2").innerText = team22;
          document.getElementById("setB3").innerText = team23;
        } else {
          console.log("No data available");
        }
      });
    }

  return (
    <div style={{ marginTop: "25%" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div class="toolbar">
          <a href="#" class="btn btn_live">
            Live<span class="live-icon"></span>
          </a>
          <a
            href="#"
            class="btn btn_live"
            style={{ backgroundColor: "grey", color: "white" }}
          >
            Upcoming
          </a>
          <a
            href="#"
            class="btn btn_live"
            style={{ backgroundColor: "greenyellow", color: "black" }}
          >
            Finished
          </a>
        </div>
      </div>

      <div class="row1-container">
        <div class="box box-down blue">
          <h2>Badminton</h2>
          <div class="set-finals">
            <p>winsA</p>
            <p>-</p>
            <p>winsB</p>
          </div>
        </div>
      </div>

      <div class="row2-container">
        <div class="box box-down cyan">
          <h2 id="TeamA">Team-A</h2>
          <div class="set-score">
            <p>SET-1</p>
            <p id="setA1">score</p>
          </div>
          <div class="set-score">
            <p>SET-2</p>
            <p id="setA2"> score</p>
          </div>
          <div class="set-score">
            <p>SET-3</p>
            <p id="setA3">score</p>
          </div>
        </div>

        <div class="box box-down cyan">
          <h2 id="TeamB">Team-B</h2>
          <div class="set-score">
            <p>SET-1</p>
            <p id="setB1">score</p>
          </div>
          <div class="set-score">
            <p>SET-2</p>
            <p id="setB2">score</p>
          </div>
          <div class="set-score">
            <p>SET-3</p>
            <p id="setB3">score</p>
          </div>
        </div>
      </div>
      <div class="toolbar">
        <img
          type="submit"
          onClick={fixtures}
          id="butt"
          class="btn btn_live"
          src="./assets/images/icons8-refresh.svg"
          alt="refresh"
          style={{ backgroundColor: "lightgreen" }}
        />
      </div>
    </div>
  );
};
