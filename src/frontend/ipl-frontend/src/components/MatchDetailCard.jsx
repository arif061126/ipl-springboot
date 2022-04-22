import React from 'react'

export const MatchDetailCard = ({match}) => {
    if(!match) return null;
    return (
        <div className="container">
            <h3>Latest Match</h3>
            <h4>Match Details</h4>
            <h5>{match.team1} vs {match.team2}</h5>
        </div>
    )
}