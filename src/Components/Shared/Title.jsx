import React from 'react';
import '../../Styles/title.scss';

const Title = ({text, float}) => {

    return (
        <h2 className={`title title-team ${float}`}>{text}</h2>
    )
}

export default Title;