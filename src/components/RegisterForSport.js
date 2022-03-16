import React from "react";
import "../styles/CreateTeamForm.css";
import { currSport } from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getDatabase, ref, set, push, update } from "firebase/database";

export const RegisterForSport = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  console.log(currSport);
  if(currSport.length === 0)
    navigate("/");

  const items = [];
  for (let i = 0; i < currSport[1]; i++) {
    items.push(
      <div className="inputContainer">
        <input
          type="tel"
          className="input"
          placeholder="a"
          id={"member_" + i}
          required
        />
        <label htmlFor="" className="label">
          Member{i+1} Email-ID
        </label>
      </div>
    );
  }

  async function handleRegistration(e) {
    e.preventDefault();
    const database = getDatabase();

    /* read data from DOM */
    var tname = document.getElementById("teamName").value;
    var members = [];
    for (let i = 0; i < currSport[1]; i++) {
      members[i] = document.getElementById(`member_${i}`).value;
    }

    // const checkValid = function(){
    //   for()
    // }

    // Upload to database for team sports
    if(currSport[2] != "team"){
      set(ref(database, `${currSport[0]}/Teams/${tname}`), {
        TeamName: tname,
      });
      for (let i = 1; i <= currSport[1]; i++) {
        update(ref(database, `${currSport[0]}/Teams/${tname}`), {
          [i]: members[i - 1],
        });
      }
    }
  // Upload to database for single player sports
    if(currSport[2] === "single"){
      set(ref(database, `${currSport[0]}/Participants/${members[0]}`), {
        Name: tname
      });
    }
    setError("Your team has been registered");
    navigate("/");
  }

  return (
    <div style={{ backgroundImage: "linear-gradient( black, white)" }}>
      <div className="signupFrm">
      {error && (
        <div className="alert alert-success" role="alert">
          <h3>
          {error}
          </h3>
        </div>
      )}
        <div className="wrapper">
          <form
            // onSubmit={handleRegistration}
            className="form"
            style={{ marginTop: "450px", marginBottom: "100px" }}
          >
            <h1 className="title"> Create New Team </h1>
            <h2> {currSport[0]} </h2>

            {currSport[2]==="team" ?
            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder=""
                id="teamName"
              />
              <label htmlFor="" className="label">
                Team Name
              </label>
            </div> : <></>}

            {items}

            <input
              type="submit"
              className="submitBtn"
              value="Register"
              id="register"
              onClick={handleRegistration}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

// document.getElementById("register").addEventListener("click", (e) => {
