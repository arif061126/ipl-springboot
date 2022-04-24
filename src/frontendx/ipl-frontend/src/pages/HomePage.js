import {React, useEffect, useState} from "react";
import {TeamTile} from "../components/TeamTile";

export const HomePage = () => {
    const [teams, setTeams] = useState([]);

    useEffect(
        ()=>{
            const fetchAllTeams = async ()=>{
                //const response = await fetch(`team`);
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
                //const response = await fetch(`http://localhost:8282/team`);
                const data = await response.json();
                console.log(data);
                setTeams(data);
            }
            fetchAllTeams();
        },[] //call the hook when teamName changes
        //empty array initialize useEffect load only once for the first time and does not do after that.
    );

    return (
        <div className="HomePage">
            <div className="header">
                <h1>IPL DashBoard</h1><hr/><br/>
            </div>
            <div className="team-grid">
                {
                    teams.map(
                        (team)=><TeamTile key={team.id} teamName={team.teamName}/>
                    )
                }
            </div>
        </div>
    )



}