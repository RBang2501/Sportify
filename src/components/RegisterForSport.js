import React from "react";
import '../styles/CreateTeamForm.css'
import { currSport } from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { Link } from "react-router-dom";

export const RegisterForSport = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleRegistration(){
    var tname = document.getElementById('teamName').value;
    var members = [];
    for(let i=0;i<currSport[1];i++){
      members[i] = document.getElementById(`member_${i}`);
    }
  
    firebase.database().ref(`Teams/Badminton-Doubles/${tname}`).set({
        TeamName: tname,
        Member1: members[1],
        Member2: members[2]
    });
    console.log("hello world");
    navigate("/");
  }
  // async function handleRegistration(e) {
  //   e.preventDefault();

  //   try {
  //     setError("");
  //     setLoading(true);
  //     await uploadToFirebase();
  //     navigate("/");
  //   } catch {
  //     setError("Failed to create an account");
  //   }
  // // var tname = document.getElementById('teamName').value;
  // // var m1 = document.getElementById('mem1').value;
  // // var m2 = document.getElementById('mem2').value;

  // // firebase.database().ref(`Teams/Badminton-Doubles/${tname}`).set({
  // //     TeamName: tname,
  // //     Member1: m1,
  // //     Member2: m2
  // // });
  //   setLoading(false);
  // }

  const items = []
  for (let i=0;i<currSport[1];i++) {
    items.push(<div className="inputContainer">
        <input type="tel" className="input" placeholder="a" id={"member_"+i}/>
        <label htmlFor="" className="label">
        Member Email-ID
        </label>
    </div>)
  }

  return (
    <div style={{backgroundImage: "linear-gradient( black, white)"}}>
    <div className="signupFrm">
      <div className="wrapper">
        <form onSubmit={handleRegistration} className="form" style={{marginTop: "450px", marginBottom: "100px"}}>
          <h1 className="title"> Create New Team </h1>
          <h2> {currSport[0]} </h2>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="" />
            <label htmlFor="" className="label">
              Team Name
            </label>
          </div>
          {items}
          <Link to="/"><input type="submit" className="submitBtn" value="Register" id="register"/></Link>
        </form>
      </div>
    </div>
    </div>
  );
};

// document.getElementById("register").addEventListener("click", (e) => {
