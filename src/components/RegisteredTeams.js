import React from "react";
import "../styles/listbox.css";
import { currSport } from "./Dashboard";
import {
  getDatabase,
  ref,
  set,
  push,
  update,
  get,
  child,
} from "firebase/database";

export var data;
export const RegisteredTeams = () => {
  // var data = retrieveData();
  const players = [];
  const teams = [];
  const items = [];

  const dbRef = ref(getDatabase());
  get(child(dbRef, `${currSport[0]}/Teams/`)).then((snapshot) => {
    if (snapshot.exists()) {
      data = snapshotToArray(snapshot);
      //console.log(data);
      for (let i = 0; i < data.length; i++) {
        teams.push(data[i].TeamName);
      }

      for (let f = 0; f < teams.length; f++) {
        document.getElementById(`t${f}`).innerText = teams[f];
      }
      for (let i = 0; i < teams.length; i++) {
        let btn = document.getElementById(`t${i}`);
        btn.onclick = function() {
            var xxx = teams[i];
            console.log(xxx);
            for(let j=1;j<=Object.keys(data[i]).length - 2;j++){
                players.push(data[i][j]);
            }

            let list1 = document.getElementById("TeamContent");
            list1.innerText = "Players:\n";
            let players_list = "";
            for (let d of players) {
                players_list += (d + "\n");
            }
            list1.innerText += players_list;
            players.splice(0, players.length);
        }
      }
    }
    return teams.length;
  });

  for (let i = 0; i < 11; i++) {
    items.push(
        <>
        <a
          href="#modal"
          role="button"
          className="listbox-leaderboard__name listbox-button__link"
        >
          <article className="listbox-leaderboard__profile" id={"t" + i}>
          </article>
        </a>
      </>
    );
  }

  return (
    <div className="listbox-leaderboard" style={{ width: "100%", marginTop: "10%", marginLeft: "auto", marginRight: "auto" }}>
     <header className="listbox-hed" ><h2>Registered Teams</h2></header>
     <div>{items}</div>
     <div className="listbox-modal-wrapper" id="modal">
       <div className="listbox-modal-body listbox-card">
         <div className="listbox-modal-header">
           <h2 className="listbox-heading" >Team Members</h2>
           <a
             href="#!"
             role="button"
             className="listbox-close"
             aria-label="close this modal"
           >
             <svg viewBox="0 0 24 24">
               <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
             </svg>
           </a>
         </div>
         <p id="TeamContent">Players:</p>
       </div>
       <a href="#!" className="listbox-outside-trigger"></a>
     </div>
   </div>
  );
};

function snapshotToArray(snapshot) {
  var dataArr = [];
  snapshot.forEach(function (childSnapshot) {
    var item = childSnapshot.val();
    item.key = childSnapshot.key;
    dataArr.push(item);
  });
  return dataArr;
}

// import React from "react";
// import "../styles/listbox.css";
// import { currSport } from "./Dashboard";
// import {
//  getDatabase,
//  ref,
//  set,
//  push,
//  update,
//  get,
//  child,
// } from "firebase/database";
 
// export var data;
// export const RegisteredTeams = () => {
//  // var data = retrieveData();
//  const players = [];
//  const teams = [];
//  const items = [];
 
//  const dbRef = ref(getDatabase());
//  get(child(dbRef, `${currSport[0]}/Teams/`)).then((snapshot) => {
//    if (snapshot.exists()) {
//      data = snapshotToArray(snapshot);
//      for (let i = 0; i < data.length; i++) {
//        teams.push(data[i].TeamName);
//      }
 
//      for (let f = 0; f < teams.length; f++) {
//        document.getElementById(`t${f}`).innerText = teams[f];
//      }
//      for (let i = 0; i < teams.length; i++) {
//        let btn = document.getElementById(`t${i}`);
//        btn.onclick = function () {
//          var xxx = teams[i];
//          console.log(xxx);
//          for (let j = 1; j <= Object.keys(data[i]).length - 2; j++) {
//            players.push(data[i][j]);
//          }
 
//          let list1 = document.getElementById("TeamContent");
//          list1.innerText = "Players:\n";
//          let players_list = "";
//          for (let d of players) {
//            players_list += (d + "\n");
//          }
//          list1.innerText += players_list;
//          players.splice(0, players.length);
//        }
//      }
//    }
//    return teams.length;
//  });
 
//  for (let i = 0; i < 11; i++) {
//    items.push(
//      <>
//        <a
//          href="#modal"
//          role="button"
//          className="listbox-leaderboard__name listbox-button__link"
//        >
//          <article className="listbox-leaderboard__profile" id={"t" + i}>
//          </article>
//        </a>
//      </>
//    );
//  }
 
//  return (
//    <div className="listbox-leaderboard" style={{ width: "100%", marginTop: "10%", marginLeft: "auto", marginRight: "auto" }}>
//      <header className="listbox-hed" ><h2>Registered Teams</h2></header>
//      <div>{items}</div>
//      <div className="listbox-modal-wrapper" id="modal">
//        <div className="listbox-modal-body listbox-card">
//          <div className="listbox-modal-header">
//            <h2 className="listbox-heading" >Team Members</h2>
//            <a
//              href="#!"
//              role="button"
//              className="listbox-close"
//              aria-label="close this modal"
//            >
//              <svg viewBox="0 0 24 24">
//                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
//              </svg>
//            </a>
//          </div>
//          <p id="TeamContent">Players:</p>
//        </div>
//        <a href="#!" className="listbox-outside-trigger"></a>
//      </div>
//    </div>
//  );
// };
 
// function snapshotToArray(snapshot) {
//  var dataArr = [];
//  snapshot.forEach(function (childSnapshot) {
//    var item = childSnapshot.val();
//    item.key = childSnapshot.key;
//    dataArr.push(item);
//  });
//  return dataArr;
// }
