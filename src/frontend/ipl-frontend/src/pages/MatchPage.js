import {React, useEffect, useState} from "react";
import {MatchDetailCard} from "../components/MatchDetailCard";
import {Link, useParams} from "react-router-dom";
import {YearSelector} from "../components/YearSelector";

export const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();
    //const teamName = "Rajasthan Royals";

    useEffect(
        ()=>{
            const fetchMatches = async ()=>{
                //const response = await fetch(`team/${teamName}/matches?year=${year}`);
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
                //const response = await fetch(`http://localhost:8282/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                console.log(data);
                setMatches(data);
            }
            fetchMatches();
        },[teamName, year] //call the hook when teamName, year changes
        //empty array initialize useEffect load only once for the first time and does not do after that.
    );

    return (
        <div className="MatchPage">
            <div className="year-selector">
                <p>IPL History</p><hr/>
                <YearSelector teamName={teamName} />
            </div>
            <div className="match-details">
                <h1 className="header">Match Details of <Link to={`/team/${teamName}`}>{teamName}</Link> in the year {year}</h1>
                {matches.map((match) => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)}
            </div>
        </div>
    );
}