import React, { useState } from 'react';
import TeamPicker from '../components/TeamPicker';
import TeamTable from '../components/TeamTable';

const Main = () => {

    const [isUpdated, setIsUpdated] = useState(false);

    const [ teams, setTeams ] = useState([]);
    return (
        <div>
            <TeamPicker isUpdated={isUpdated} setIsUpdated={setIsUpdated}/>
            <TeamTable teams={teams} setTeams={setTeams} isUpdated={isUpdated} />
        </div>
    )
}

export default Main;