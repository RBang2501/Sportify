import React from "react";
import '../styles/CreateTeamForm.css'

const allowedMembers = [];

export const RegisterForSport = () => {

    const items = []

  for (let i=0;i<4;i++) {
    items.push(<div className="inputContainer">
        <input type="tel" className="input" placeholder="a" />
        <label for="" className="label">
        Member Email - ID
        </label>
    </div>)
  }

  return (
    <div style={{backgroundImage: "linear-gradient( black, white)"}}>
    <div className="signupFrm">
      <div className="wrapper">
        <form action="" className="form">
          <h1 className="title"> Create New Team </h1>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="" />
            <label for="" className="label">
              Team Name
            </label>
          </div>
          {items}
          <input type="submit" className="submitBtn" value="Sign up" />
        </form>
      </div>
    </div>
    </div>
  );
};
