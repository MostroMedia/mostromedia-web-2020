import React from 'react';
import Title from './Shared/Title';
import Character from './Shared/Character';
import ChangeButton from './Utils/ChangeButton';
import '../Styles/team.css';

const Team = () => {
    return (
        <div className="team">
            <div className="item-1">
                <Title />
            </div>
            <div className="item-2">
                <ChangeButton />
                <ChangeButton />
            </div>
            <div className="item-3">
                <Character />
                <Character />
                <Character />
            </div> 
        </div>
    );
}

export default Team;
