import React from 'react';
import '../../Styles/subtitle.scss';

const Subtitle = ({text, float}) => {
    return (
        <h3 className={`subtitle subtitle-team ${float}`}>{text}</h3>
    )
}


export default Subtitle;