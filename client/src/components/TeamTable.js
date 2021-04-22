import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router'

const TeamTable = (props) => {

    const {teams, setTeams, isUpdated} = props
    const [ conf, setConf] = useState("ACC");

    const fetchTeams = () => {
        axios.get("http://localhost:8000/api/footballs/")
            .then(res => {
                setTeams(res.data.footballs)
                // setFilteredTeams(res.data)
                // teams.filter(school => school.conference== conf);
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    useEffect (() => {
        fetchTeams();
    }, [isUpdated, fetchTeams])
    return (
        <div>
            <h1 class="beach">Teams by Conference</h1>
            <form className="form">
                <label>Conference:</label>
                <select onChange={e => setConf(e.target.value)} value="conf">
                    <option value=""></option>
                    <option value="AAC">AAC</option>
                    <option value="ACC">ACC</option>
                    <option value="Big 12">Big 12</option>
                    <option value="Big Ten">Big Ten</option>
                    <option value="C-USA">C-USA</option>
                    <option value="MAC">MAC</option>
                    <option value="Mountain West">MWC</option>
                    <option value="Pac 12">Pac 12</option>
                    <option value="SEC">SEC</option>
                    <option value="Sun Belt">Sun Belt</option>
                    <option value="Independent">Independents</option>
                </select>
                {/* {
                    teams.map((team, index)=> {
                        return (
                            <select value={conf}>
                                <option value={team.conference}></option>
                            </select>
                        )
                    })
                } */}
            </form>
            <table className="container" style={{color: "antiquewhite"}}>
                <thead className="red">
                    <tr>
                        <th>Conference</th>
                        <th>Team</th>
                        <th>Picked Wins</th>
                        <th>Picked Losses</th>
                        {/* <th>Main Color</th>
                        <th>Alternate Color</th> */}
                    </tr>
                </thead>
                <tbody class="xtrablue">
                    {
                        teams.filter(school => school.conference===conf).map((team, index) => {
                            return (
                                <tr key={index}>
                                    <td>{team.conference}</td>
                                    <td style={{backgroundColor: team.color1, color: team.color2, height: "50px", fontWeight: "bold", fontSize: "20px" }}><Link style={{color: team.color2}} to={`/${team._id}`}>{team.name} {team.mascot}</Link></td>
                                    <td>{team.picked_wins}</td>
                                    <td>{team.picked_losses}</td>
                                    {/* <td style={{backgroundColor: team.color1}}>{team.color1}</td>
                                    <td style={{backgroundColor: team.color2}}>{team.color2}</td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TeamTable;