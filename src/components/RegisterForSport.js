import React from "react";
import "../styles/CreateTeamForm.css";
import "../styles/templatemo-training-studio.css"
import { currSport } from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getDatabase, ref, set, push, update } from "firebase/database";

export const RegisterForSport = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(currSport);

  if (currSport.length === 0) navigate("/");

  const reqItems = [];
  for (let i = 0; i < currSport[1]; i++) {
    reqItems.push(
      <div className="createTeam-inputContainer">
          <input
           type="tel"
           className="createTeam-input"
           placeholder="a"
           id={"member_" + i}
           required
         />
         <label htmlFor="" className="createTeam-label">
           Member{i+1} Email-ID
         </label>
       </div>
    );
  }
  const opItems = [];


  async function handleRegistration(e) {
    e.preventDefault();
    console.log('hello world');
    const database = getDatabase();

    /* read data from DOM */
    var tname = document.getElementById("teamName").value;
    console.log(tname);
    console.log(currSport[1]);

    var members = [];
    for (let i = 0; i < currSport[1]; i++) {
      members[i] = document.getElementById(`member_${i}`).value;
      console.log(members[i])
    }

    // Upload to database for team sports
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
    setError("Your team has been registered");
    // navigate("/");
  }

  return (
    <div style={{ backgroundImage: "linear-gradient( black, white)" }}>
       <div className="createTeam-signupFrm">
       {error && (
         <div className="createTeam-alert createTeam-alert-success" role="alert">
           {error}
         </div>
       )}
         <div className="createTeam-wrapper">
           <form
             // onSubmit={handleRegistration}
             className="createTeam-form"
             style={{ marginTop: "450px", marginBottom: "100px" }}
           >
             <h1 className="createTeam-title"> Create New Team </h1>
             <h2> {currSport[0]} </h2>
   
             {currSport[3]==="team" ?
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
             </div> : <></>}
   
             {reqItems}
   
             <input
               type="submit"
               className="createTeam-submitBtn"
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


  // import React from "react";
  // import "../styles/CreateTeamForm.css";
  // import "../styles/templatemo-training-studio.css"
  // import { currSport } from "./Dashboard";
  // import { useNavigate } from "react-router-dom";
  // import { useState } from "react";
  // import { getDatabase, ref, set, push, update } from "firebase/database";
   
  // export const RegisterForSport = () => {
  //  const navigate = useNavigate();
  //  const [loading, setLoading] = useState(false);
  //  const [error, setError] = useState("");
  //   console.log(currSport);
  //  if(currSport.length === 0)
  //    navigate("/");
   
  //  const items = [];
  //  for (let i = 0; i < currSport[1]; i++) {
  //    items.push(
  //      <div className="createTeam-inputContainer">
  //        <input
  //          type="tel"
  //          className="createTeam-input"
  //          placeholder="a"
  //          id={"member_" + i}
  //          required
  //        />
  //        <label htmlFor="" className="createTeam-label">
  //          Member{i+1} Email-ID
  //        </label>
  //      </div>
  //    );
  //  }
   
  //  async function handleRegistration(e) {
  //    e.preventDefault();
  //    const database = getDatabase();
   
  //    /* read data from DOM */
  //    var tname = document.getElementById("teamName").value;
  //    var members = [];
  //    for (let i = 0; i < currSport[1]; i++) {
  //      members[i] = document.getElementById(`member_${i}`).value;
  //    }
   
  //    // Upload to database for team sports
  //    if(currSport[2] != "team"){
  //      set(ref(database, `${currSport[0]}/Teams/${tname}`), {
  //        TeamName: tname,
  //      });
  //      for (let i = 1; i <= currSport[1]; i++) {
  //        update(ref(database, `${currSport[0]}/Teams/${tname}`), {
  //          [i]: members[i - 1],
  //        });
  //      }
  //    }
  //  // Upload to database for single player sports
  //    if(currSport[2] === "single"){
  //      set(ref(database, `${currSport[0]}/Participants/${members[0]}`), {
  //        Name: tname
  //      });
  //    }
  //    setError("Your team has been registered");
  //    navigate("/");
  //  }
   
  //  return (
  //    <div style={{ backgroundImage: "linear-gradient( black, white)" }}>
  //      <div className="createTeam-signupFrm">
  //      {error && (
  //        <div className="createTeam-alert createTeam-alert-success" role="alert">
  //          <h3>
  //          {error}
  //          </h3>
  //        </div>
  //      )}
  //        <div className="createTeam-wrapper">
  //          <form
  //            // onSubmit={handleRegistration}
  //            className="createTeam-form"
  //            style={{ marginTop: "450px", marginBottom: "100px" }}
  //          >
  //            <h1 className="createTeam-title"> Create New Team </h1>
  //            <h2> {currSport[0]} </h2>
   
  //            {currSport[2]==="team" ?
  //            <div className="createTeam-inputContainer">
  //              <input
  //                type="text"
  //                className="createTeam-input"
  //                placeholder=""
  //                id="teamName"
  //              />
  //              <label htmlFor="" className="createTeam-label">
  //                Team Name
  //              </label>
  //            </div> : <></>}
   
  //            {items}
   
  //            <input
  //              type="submit"
  //              className="createTeam-submitBtn"
  //              value="Register"
  //              id="register"
  //              onClick={handleRegistration}
  //            />
  //          </form>
  //        </div>
  //      </div>
  //    </div>
  //  );
  // };
   
  // // document.getElementById("register").addEventListener("click", (e) => {
  