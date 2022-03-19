import React from "react";
import "../styles/CreateTeamForm.css";
import "../styles/templatemo-training-studio.css";
import { currSport } from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getDatabase,
  ref,
  set,
  push,
  update,
  onValue,
  get,
  child
} from "firebase/database";
import { getAuth } from "firebase/auth";


const auth = getAuth();

export const RegisterForSport = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  let RegTeams = [];
  let tname;
  let members = [];
  let data = [];

  if (currSport.length === 0) navigate("/");

  const reqItems = [];
  for (let i = 0; i < currSport[1]; i++) {
    let element;
    if (i === 0) {
      element = (
        <div className="createTeam-inputContainer">
          <text
            type="text"
            className="createTeam-input"
            placeholder="a"
            id={"member_0"}
            style={{paddingTop: "10px"}}
            required
          >{auth.currentUser.email}</text>
          <label htmlFor="" className="createTeam-label">
            Member{i + 1} Email-ID
          </label>
        </div>
      );
    }
    else{
    if (i < currSport[2]) {
      element = (
        <div className="createTeam-inputContainer">
          <input
            type="text"
            className="createTeam-input"
            placeholder="a"
            id={"member_" + i}
            required
          />
          <label htmlFor="" className="createTeam-label">
            Member{i + 1} Email-ID
          </label>
        </div>
      );
    } else {
      element = (
        <div className="createTeam-inputContainer">
          <input
            type="text"
            className="createTeam-input"
            placeholder="a"
            id={"member_" + i}
          />
          <label htmlFor="" className="createTeam-label">
            Member{i + 1} Email-ID
          </label>
        </div>
      );
    }
  }
    reqItems.push(element);
  }

  function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function (childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
    });

    return returnArr;
  }

  function checkForUser(teams){
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].TeamName === tname) {
        console.log("team found")
        for (let j = 1; j <= currSport[1]; j++) {
          console.log(teams[i][j]);
          if (teams[i][j] == auth.currentUser.email) {
            console.log("auth correct")
            return true;
          }
        }
      }
    }
    return false;
  }

  async function handleDelete(e) {
    e.preventDefault();
    const database = getDatabase();

    /* read data from DOM */
    tname = document.getElementById("teamName").value;

    var status;
    const dbRef = ref(getDatabase());
    get(child(dbRef, `${currSport[0]}/Teams/`)).then((snapshot) => {
      if (snapshot.exists()) {
        RegTeams = snapshotToArray(snapshot);
      }
      status = checkForUser(RegTeams);
      if (status == true) {
        if (currSport[3] === "team") {
          set(ref(database, `${currSport[0]}/Teams/${tname}`), {
            TeamName: null,
          });
          for (let i = 1; i <= currSport[1]; i++) {
            update(ref(database, `${currSport[0]}/Teams/${tname}`), {
              [i]: null,
            });
          }
        }
        console.log("Success");
        setError("Your team has been deleted");
      }
      else {
        console.log("Failure");
        setError("Please Recheck Your Team Name");
      }
      alert(error);
    });

    // navigate("/");
  }
  function isUser(email) {
    console.log("is User fnc")
    let allUsers = [];
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Users/`)).then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();
        console.log(data);
        for(let k of Object.keys(data)){
            allUsers.push(data[k]["email"]);
        }
        console.log(allUsers);
        for (let i = 0; i < allUsers.length; i++) {
          console.log("**********");
          console.log(allUsers[i], email);
          if (allUsers[i] == email) {
            return true;
          }
        }
        setError("Invalid User, Please register the user")
        return false;
      }
     });
  }

  async function handleRegistration(e) {
    e.preventDefault();
    const database = getDatabase();

    /* read data from DOM */
    tname = document.getElementById("teamName").value;
    if(tname === ""){
      return alert("Enter Team Name");
    }
    let count = 1;

    members[0] = document.getElementById("member_0").innerText;
    for (let i = 1 ; i < currSport[1]; i++) {
      members[i] = document.getElementById(`member_${i}`).value;

      if(members[i] != ""){
        if(members[i].search("iiitb.ac.in") === -1 && members[i].search("gmail.com") === -1)
          return alert("Use Members Email-Id Only");
        else
          count++;
      }
    }
    if(count < currSport[2])
      alert(`Minimum Members Required Are ${currSport[2]}`);
    
    const starCountRef = ref(database, `${currSport[0]}/Teams/`);
    onValue(starCountRef, (snapshot) => {
      RegTeams = snapshotToArray(snapshot);
    });
    // Upload to database for team sports
    console.log("checking");
    // console.log(RegTeams);
    // console.log(members);
    
    let status = Check();
    console.log("checked");
    console.log(status);
    if (status == true) {
      if (currSport[3] === "team") {
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
      if (currSport[3] === "single") {
        update(ref(database, `${currSport[0]}/Participants/${members[0]}`), {
          Name: tname,
        });
      }
      console.log("Success");
      setError("Your Team Has Been Registered");
    } else {
      console.log("failure");
      setError("Your Team Has Not Been Registered. Please Try Again");
    }
    if(error)
    alert(error);
    // navigate("/");
  }

  function FindUser(email) {
    for (let i = 0; i < RegTeams.length; i++) {
      if (RegTeams[i].TeamName != tname) {
        console.log(RegTeams[i].TeamName);
        for (let j = 0; j < currSport[1]; j++) {
          console.log(RegTeams[i][j]);
          if (RegTeams[i][j] == email) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function Check() {
    //To check unique members
    for (let i = 0; i < members.length; i++) {
      let count = 0;
      for (let j = i; j < members.length; j++) {
        if (members[i] == members[j]) {
          count++;
        }
        if (count > 1) {
          console.log(count);
          return false;
        }
      }
    }
    // To check for duplicate team name
    for (let x = 0; x < RegTeams.length; x++) {
      if (RegTeams[x].TeamName == tname) {
        // return setError(
        //   	`${RegTeams[x].TeamName} has already been registered. Please choose a different Team Name.`
        //   );
        console.log("al reg");
        return false;
      }
    }
    for (let i = 0; i < members.length; i++) {
      // To check if user is registered on site
      if (isUser(members[i]) == false) {
        console.log(members.length, "member length");
        return false;
      }
      // To check if users is already present in another team in a single sport
      if (FindUser(members[i]) == true) {
        return false;
      }
    }
    return true;
  }
  return (
    <div style={{ backgroundImage: "linear-gradient( black, white)" }}>
      <div className="createTeam-signupFrm">
        <div className="createTeam-wrapper">
          <form
            // onSubmit={handleRegistration}
            className="createTeam-form"
            style={{ marginTop: `${currSport[1]*10 + 600}px`, marginBottom: "100px" }}
          >
            <h1 className="createTeam-title"> Create New Team </h1>
            <h2> {currSport[0]} </h2>

            {currSport[3] === "team" ? (
              <div className="createTeam-inputContainer">
                <input
                  type="text"
                  className="createTeam-input"
                  placeholder=""
                  id="teamName"
                />
                <label htmlFor="" className="createTeam-label">
                  Team Name
                </label>
              </div>
            ) : (
              <></>
            )}

            {reqItems}
            <input
              type="submit"
              className="createTeam-submitBtn"
              value="Add Team Member"
              id="register"
              onClick={handleRegistration}
            />
            <input
              type="submit"
              className="createTeam-submitBtn"
              value="Register"
              id="register"
              onClick={handleRegistration}
            />
            <input
              type="submit"
              className="createTeam-submitBtn"
              style={{backgroundColor: "red"}}
              value="Delete"
              id="register"
              onClick={handleDelete}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
