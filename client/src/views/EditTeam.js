import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditTeam = (props) => {
    const {id} = props;
    const [ name, setName ] = useState("");
    const [ mascot, setMascot] = useState("")
    const [ conference, setConference ] = useState("");
    const [ stadium, setStadium ] = useState("");
    const [ color1, setColor1 ] = useState("");
    const [ color2, setColor2 ] = useState("");
    const [ town, setTown ] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8000/api/footballs/" + id)
            .then(res => {
                setName(res.data.football.name);
                setMascot(res.data.football.mascot);
                setConference(res.data.football.conference);
                setStadium(res.data.football.stadium);
                setColor1(res.data.football.color1);
                setColor2(res.data.football.color2);
                setTown(res.data.football.town);
            })
            .catch(err => console.log(err))
    }, [id])

    const update = (e) => {
        e.preventDefault();
        const changedTeam = {name, mascot, conference, color1, color2, town, stadium}
        axios.put("http://localhost:8000/api/footballs/update/" + id, changedTeam)
            .then(res => {
                console.log(res.data.football);
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <h1 class="blue">Edit Page</h1>
                <form onSubmit={update}>
                    <div className="contianer mt-4" style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Team Name:</label>
                                <input value={name} className="form-control" type="text" onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Team Town::</label>
                                <input value={town} className="form-control" type="text" onChange={e => setTown(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Mascot:</label>
                                <input value={mascot} className="form-control" type="text" onChange={e => setMascot(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Conference:</label>
                                <input value={conference} className="form-control" type="text" onChange={e => setConference(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Stadium Name:</label>
                                <input value={stadium} className="form-control" type="text" onChange={e => setStadium(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Main Color:</label>
                                <input value={color1} className="form-control" type="text" onChange={e => setColor1(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Alternate Color:</label>
                                <input value={color2} className="form-control" type="text" onChange={e => setColor2(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <input class="greenbtn" type="submit" value="Update Team!"/>
                </form>
        </div>
    )
}

export default EditTeam;