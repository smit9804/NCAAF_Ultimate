import { Link } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TeamPicker = (props) => {
    const {teams, setTeams, isUpdated, setIsUpdated} = props;
    const [ teamID1, setTeamID1] = useState("")
    const [ team1, setTeam1] = useState([]);
    const [ teamcolor1, setTeamColor1] = useState("")
    const [ teamaltColor1, setTeamAltColor1 ] = useState("")
    const [ pickedWins1, setPickedWins1 ] = useState(0)
    const [ pickedLosses1, setPickedLosses1 ] = useState(0)
    const [ mascot1, setMascot1 ] = useState("")
    const [ teamID2, setTeamID2] = useState("")
    const [ team2, setTeam2] = useState([]);
    const [ teamcolor2, setTeamColor2] = useState("")
    const [ teamaltColor2, setTeamAltColor2 ] = useState("")
    const [ pickedWins2, setPickedWins2 ] = useState(0)
    const [ pickedLosses2, setPickedLosses2 ] = useState(0)
    const [ mascot2, setMascot2 ] = useState("")
    
    useEffect (() => {
        onClickHandler1();
    }, [isUpdated]);

    const onClickHandler1 = () => {
        axios.get("http://localhost:8000/api/footballs/")
            .then(res => {
                let x = Math.floor(Math.random() * res.data.footballs.length)
                // console.log("x is", x);
                let team1 = res.data.footballs[x];
                // console.log("team1 is", team1);
                setTeam1(team1.name)
                setTeamID1(team1._id)
                setTeamColor1(team1.color1)
                setTeamAltColor1(team1.color2)
                setPickedWins1(team1.picked_wins)
                setPickedLosses1(team1.picked_losses)
                setMascot1(team1.mascot)
                
                // console.log(res.data.footballs.length)
            })
            .catch(err => console.log(err))
            axios.get("http://localhost:8000/api/footballs/")
            .then(res => {
                let y = Math.floor(Math.random() * res.data.footballs.length)
                
                
                let team2 = res.data.footballs[y];
                // console.log("team2 is", team2)
                setTeam2(team2.name)
                setTeamID2(team2._id)
                setTeamColor2(team2.color1)
                setTeamAltColor2(team2.color2)
                setPickedWins2(team2.picked_wins)
                setPickedLosses2(team2.picked_losses)
                setMascot2(team2.mascot)
                
            })
            .catch(err => console.log(err))
    }

    const teamWin1 = (e, teamID1) => {
        e.preventDefault();
        // const changeTeam = {team1}
        axios.put("http://localhost:8000/api/footballs/update/" + teamID1, {$inc: {picked_wins: 1}})
            .then(res => {
                setPickedWins1(pickedWins1 + 1)
                console.log(res.data)
                setIsUpdated(true)
            })
            .catch(err => console.log(err));
        }

    const teamLoss2 = (e, teamID2) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/footballs/update/" + teamID2, {$inc: {picked_losses: 1}})
            .then( res => {
                setPickedLosses2(pickedLosses2 + 1)
                console.log(res.data)
                setIsUpdated(true)

            })
            .catch(err => console.log(err))
        }

        
        const teamWin2 = (e, teamID2) => {
            e.preventDefault();
            axios.put("http://localhost:8000/api/footballs/update/" + teamID2, {$inc: {picked_wins: 1}})
            .then(res => {
                setPickedWins2(pickedWins2 + 1)
                console.log(res.data)
                setIsUpdated(true)

            })
            .catch(err => console.log(err))
        }
        
        const teamLoss1 = (e, teamID1) => {
            e.preventDefault();
            axios.put("http://localhost:8000/api/footballs/update/" + teamID1, {$inc: {picked_losses: 1}})
                .then( res => {
                    setPickedLosses1(pickedLosses1 + 1)
                    console.log(res.data)
                    setIsUpdated(true)

                })
                .catch(err => console.log(err))
            }

    
    return (
    <div>
        <div class="teamer">
            <div>
                <div style={{height: "300px", width: "300px", border: "2px solid antiquewhite", backgroundColor: teamcolor1, color: teamaltColor1 }}>
                    <h1><Link style={{color: teamaltColor1}} to={`/${teamID1}`}>{team1} {mascot1}</Link></h1>
                    <br/>
                    <button onClick={(e) => { teamWin1(e, teamID1); teamLoss2(e, teamID2); onClickHandler1()}}  class="blackbtn">{team1} would win</button>
                </div>
            </div>
            <div>
                <div style={{height: "300px", width: "300px", border: "2px solid antiquewhite", backgroundColor: teamcolor2, color: teamaltColor2 }}>
                    <h1><Link style={{color: teamaltColor2}} to={`/${teamID2}`}>{team2} {mascot2}</Link></h1>
                    <br/>
                    <button onClick={(e) => { teamWin2(e, teamID2); teamLoss1(e, teamID1); onClickHandler1()}} class="blackbtn">{team2} would win</button>
                </div>
            </div>
        </div>
        <button class="bluebtn" onClick={onClickHandler1}>Get a Random Matchup!</button>
        
    </div>
    )
}

export default TeamPicker;