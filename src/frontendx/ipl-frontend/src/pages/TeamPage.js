import {React, useEffect, useState} from "react";
import {MatchDetailCard} from "../components/MatchDetailCard";
import {MatchSmallCard} from "../components/MatchSmallCard";
import {Link, useParams} from "react-router-dom";
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage = () => {

    const [team, setTeam] = useState({matches:[]});
    const {teamName} = useParams();

    useEffect(
        ()=>{
            const fetchMatches = async ()=>{
                //const response = await fetch(`team/${teamName}`);
                //const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
                const response = await fetch(`http://localhost:8282/team/${teamName}`);
                const data = await response.json();
                console.log(data);
                setTeam(data);
            }
            fetchMatches();
        },[teamName] //call the hook when teamName changes
        //empty array initialize useEffect load only once for the first time and does not do after that.
    );

    if(!team || !team.teamName){
        return <h1>Team not found!</h1>
    }

    return (
        <div className="container">
            <div className="TeamPage">
                <div className="team-name">
                    <h1>{team.teamName}</h1>
                </div>
                <div className="win-loss">
                    <h5>Win / Losses:</h5>
                    <PieChart
                        data={[
                            { title: 'Losses', value: team.totalMatch-team.totalWin, color: 'lightsalmon' },
                            { title: 'Wins', value: team.totalWin, color: 'darkseagreen' },
                        ]}
                    />
                </div>
                <div className="latest-match">
                    <h3>Latest Match: </h3>
                    <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
                    <div className="old-matches">
                        <h5>Old Matches:</h5><hr/>
                    </div>
                </div>

                {team.matches.slice(1).map((match) => <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />)}
                <div className="more">
                    <Link to={`/team/${teamName}/matches/2020`}>More ></Link>
                </div>
            </div>
        </div>
    );
}


