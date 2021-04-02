import { Link } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TeamBlock from '../components/TeamBlock';

const TeamDetails = (props) => {
    const [ team, setTeam ] = useState({});



    useEffect(() => {
        axios.get(`http://localhost:8000/api/footballs/${props.id}`)
            .then(res => setTeam(res.data.football))
            .catch(err => console.log(err))
    }, [props.id])

    

    return (
        <div>
            <div className="container">
                <br />
                <TeamBlock team={team} />
                <Link class="blackbtn" to="/">Back to Main Page</Link>
                <Link class="yellowbtn" to={`/edit/${props.id}`}>Edit Team</Link>
            </div>
        </div>
    )
}

export default TeamDetails;