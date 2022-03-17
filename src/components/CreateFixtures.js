import React from "react";
import "../styles/createFixtures.css";
import { getDatabase, ref, set, push, update } from "firebase/database";

export const CreateFixtures = () => {
  var totalFixtures = 0;
  // document.getElementById("butt1").addEventListener("click", (e) => {
  function createFixture(e) {
    e.preventDefault();
    for (let i = 0; i < totalFixtures; i++) {
      document.getElementById("butt1").innerText = "Edit";
      var team1 = document.getElementById("t11").value;
      var team2 = document.getElementById("t12").value;
      var t1 = document.getElementById("t1").value;
      var d1 = document.getElementById("d1").value;
      console.log(team1);
      console.log(team2);
      console.log(t1);
      console.log(d1);

      const database = getDatabase();
        
    set(ref(database, `Basketball/Teams/${team1}`), {
        TeamA: team1,
        TeamB: team2,
        Time: t1,
        Date: d1,
        Aset1: "0",
        Aset2: "0",
        Aset3: "0",
        Bset1: "0",
        Bset2: "0",
        Bset3: "0",
      });
    }
  }

  function addFixture() {
    let leader_name = document.createElement("div");
    leader_name.classList.add("leaderboard__name");
    leader_name.classList.add("button__link");
    let inpT1 = document.createElement("input");
    inpT1.setAttribute("id", `t${totalFixtures}1`);
    let para = document.createElement("p");
    let inpT2 = document.createElement("input");
    inpT2.setAttribute("id", `t${totalFixtures}2`);
    let time = document.createElement("input");
    time.setAttribute("id", `t${totalFixtures}`);
    let date = document.createElement("input");
    date.setAttribute("id", `t${totalFixtures}`);
    let btn = document.createElement("button");
    inpT1.classList.add("leaderboard__profile");
    para.innerText = "V/S";
    inpT2.classList.add("leaderboard__profile");
    time.classList.add("leaderboard__profile");
    date.classList.add("leaderboard__profile");
    inpT1.setAttribute("placeholder", "Team-1");
    inpT2.setAttribute("placeholder", "Team-2");
    time.setAttribute("placeholder", "Time");
    date.setAttribute("placeholder", "Date");
    btn.setAttribute("id", `butt${totalFixtures}`)
    btn.classList.add("Submit");
    btn.innerText = "Create Fixtures";
    btn.onclick = "createFixture()";
    leader_name.appendChild(inpT1);
    leader_name.appendChild(para);
    leader_name.appendChild(inpT2);
    leader_name.appendChild(time);
    leader_name.appendChild(date);
    leader_name.appendChild(btn);
    document.getElementById("fixtures_container").appendChild(leader_name);
    totalFixtures++;
  }

  return (
    <div style={{ marginTop: "20%" }}>
      <header></header>
      <main className="leaderboard__profiles" id="fixtures_container">
        <div className="leaderboard__name button__link">
          <input
            type="text"
            className="leaderboard__profile"
            id="t11"
            placeholder="Team-1"
          />
          <p style={{ display: "inline-flex" }}>V/S</p>
          <input
            type="text"
            className="leaderboard__profile"
            id="t12"
            placeholder="Team-2"
          />
          <input
            type="text"
            className="leaderboard__profile"
            id="t1"
            placeholder="Time"
          />
          <input
            type="text"
            className="leaderboard__profile"
            id="d1"
            placeholder="Date"
          />
          <button className="Submit" id="butt1" onClick={createFixture}>
            Create Fixtures
          </button>
        </div>
        <button className="btn" id="add_btn" onClick={addFixture}>
          Add Fixture
        </button>
      </main>
    </div>
  );
};
