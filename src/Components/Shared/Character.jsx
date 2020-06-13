import React from 'react';
import '../../Styles/character.scss';
import mostro from "../../Images/Mostros/mostro_0001.png"

const Character = () => {
    return (
        <div className="character">
            <img className="mostro-img" src={mostro} alt="Mostro" />
            <div className="background-front"></div>
            <div className="background-back"></div>
        </div>
    );
}

export default Character;