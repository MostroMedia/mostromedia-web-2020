import React from 'react';
import '../../Styles/title.scss';

const Title = ({text, float}) => {

    let position = false;

    if(float === 'left') position = true;

    return (
        <h2 className={`title title-team ${position ? 'left' : 'right'}`}>{text}</h2>
    )
}

export default Title;