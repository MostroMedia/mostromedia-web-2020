import React from 'react';
import '../../Styles/subtitle.scss';

const Subtitle = ({text, float}) => {

    let position = false; 

    if(float === 'left') position = true; 
      
    return (
        <h3 className={`subtitle subtitle-team ${position ? 'left' : 'right'}`}>{text}</h3>
    )
}

export default Subtitle;