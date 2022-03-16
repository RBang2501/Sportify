import React from 'react'
import "../styles/listbox.css"
import { currSport } from './Dashboard';
import { getDatabase, ref, set, push, update, get } from "firebase/database";

export const RegisteredTeams = () => {
    var teams = [];
    var data = [];
    var players = [];
    
    function snapshotToArray(snapshot) {
        var dataArr = [];
        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            dataArr.push(item);
        });
        return dataArr;
    };
    
    const database = getDatabase();
    ref(database, `${currSport}/Teams/`).get().then(snapshot => {
        if (snapshot.exists()) {
            data = snapshotToArray(snapshot);
            for (let i = 0; i < data.length; i++) {
                teams.push(data[i].TeamName);
            }
            console.log(data);
            console.log(teams);
        } else {
            console.log("No data available");
        }

        for (let f = 0; f < teams.length; f++) {
            document.getElementById(`t${f}`).innerText = teams[f];
        }
        for (let i = 0; i < teams.length; i++) {
            let btn = document.getElementById(`t${i}`);
            btn.onclick = function() {
                var xxx = teams[i];
                console.log(xxx);

                database.ref(`${currSport}/Teams/${xxx}`).get()
                    .then(snapshot => {
                        if (snapshot.exists()) {
                            players = snapshotToArray(snapshot);
                            console.log(players);
                        }
                    })

                let list1 = document.getElementById("TeamContent");
                list1.innerText = "Players:\n";
                let players_list = "";
                for (let d of players) {
                    players_list += (d + "\n");
                }
                list1.innerText += players_list;
            }
        }
    })
    const items = [];
    for(let i=0;i<teams.length;i++){
        items.push(<a href="#modal" role="button" class="leaderboard__name button__link">
        <article class="leaderboard__profile" id={"t" + i}>
            {teams[i]}
        </article>
    </a>);
    }
  return (
    {items}
  )
}
