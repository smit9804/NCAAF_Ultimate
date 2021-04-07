import React from 'react';

const TeamBlock = (props) => {

    const {team} = props;

    return (
        <div>
            <div className="container">
                <h1>{team.name} {team.mascot}</h1>
                <h2>{team.town}</h2>
                <h2>{team.conference}</h2>
                <h2>{team.color1}</h2>
                <div style={{backgroundColor: team.color1, height: "75px", alignItems: "center"}}/>
                <h2>{team.color2}</h2>
                <div style={{backgroundColor: team.color2, height: "75px", alignItems: "center"}}/>
            </div>
        </div>
    )
}

export default TeamBlock;