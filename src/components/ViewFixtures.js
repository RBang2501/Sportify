import React from 'react'
import "../styles/listboxFix.css"
import { Link } from 'react-router-dom'
import { currSport } from './Dashboard';
import {
    getDatabase,
    ref,
    set,
    push,
    update,
    get,
    child,
  } from "firebase/database";
 
export const ViewFixtures = () => {
    const teamA = [];
    const dates = [];
    const teamB = [];
    const time = [];
    var data = [];

    const items = [];

    function snapshotToArray(snapshot) {
        var returnArr = [];
        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            returnArr.push(item);
        });
        return returnArr;
    };
    // firebase.initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Basketball/Fixture/`)).then((snapshot) => {
        if (snapshot.exists()) {
            data = snapshotToArray(snapshot);
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                teamA.push(data[i].TeamA);
                teamB.push(data[i].TeamB);
                dates.push(data[i].Date);
                time.push(data[i].Time);
            }
        }
        console.log(teamA.length, "teamA");
        for(let i=0;i<=teamA.length;i++){
            items.push(<div role="button" className="viewFixtures-leaderboard__name viewFixtures-button__link">
                <article className="viewFixtures-leaderboard__profile" id={"t" + i + "1"}>Team-1</article>
                <p style={{ display: "inline-flex", fontSize:"x-large" }}>V/S</p>
                <article className="viewFixtures-leaderboard__profile" id={"t" + i + "2"}>Team-2</article>
                <article className="viewFixtures-leaderboard__profile" id={"t" + i}>Time</article>
                <article className="viewFixtures-leaderboard__profile" id={"d" + i}>Date</article>
                <article className="viewFixtures-Submit" id={"v" + i}>
                <Link to="/score-set">View</Link>
                </article>
            </div>);
        }
    });
    

   return (
       <div style={{ marginTop: "10%" }}>
           <article className='viewFixtures-leaderboard'>
               <main className="viewFixtures-leaderboard__profiles">
                   {items}
                <div role="button" className="viewFixtures-leaderboard__name viewFixtures-button__link">
                    <article className="viewFixtures-leaderboard__profile" id={"t11"}>Team-1</article>
                    <p style={{ display: "inline-flex", fontSize:"x-large" }}>V/S</p>
                    <article className="viewFixtures-leaderboard__profile" id={"t12"}>Team-2</article>
                    <article className="viewFixtures-leaderboard__profile" id={"t1"}>Time</article>
                    <article className="viewFixtures-leaderboard__profile" id={"d1"}>Date</article>
                    <article className="viewFixtures-Submit" id="v1">
                    <Link to="/score-set">View</Link>
                    </article>
                </div>
               </main>
           </article>
       </div>
   )
}
