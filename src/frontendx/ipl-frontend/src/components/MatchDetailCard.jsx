import React from 'react'
import {Link} from "react-router-dom";

export const MatchDetailCard = ({match, teamName}) => {
    if(!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const isMatchWin = teamName === match.matchWinner;

    return (
        <div className={isMatchWin?"MatchDetailCard win-card":"MatchDetailCard lost-card"}>
            <div className="detail">
                <span className="vs">vs</span>
                <h1><Link to={`/team/${otherTeam}`}>{otherTeam}</Link></h1>
                <h4 className="match-date">Date: {match.date}</h4>
                <h4 className="match-venue">Venue: {match.venue}</h4>
                <h4 className={isMatchWin?"match-result win-card":"match-result lost-card"}>Result: {match.matchWinner} won by {match.resultMargin} {match.result}</h4>
            </div>

            <div className="additional">
                <h3>First Innings</h3>
                <p>{match.team1}</p>
                <h3>Second Innings</h3>
                <p>{match.team2}</p>
                <h3>Player of the Match</h3>
                <p>{match.playerOfMatch}</p>
                <h3>Match Umpires</h3>
                <p>{match.umpire1}, {match.umpire2}</p>
            </div>

        </div>
    )
}