import React from 'react';
import {Link} from "react-router-dom";

export const MatchSmallCard = ({match, teamName}) => {
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const isMatchWin = teamName === match.matchWinner;

    return (
        <div className={isMatchWin?"MatchSmallCard win-card":"MatchSmallCard lost-card"}>
            <span className="vs">vs</span>
            <h3><Link to={`/team/${otherTeam}`}>{otherTeam}</Link></h3>
            <div className="match-result">
                <p>Result: {match.matchWinner} won by {match.resultMargin} {match.result}</p>
            </div>
        </div>
    )
}