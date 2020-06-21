import React from 'react';
import './../../Styles/textButton.scss';

const TextButton = ({text}) => {
    return ( 
        <button className="text-button"><span>{text}</span></button> 
    );
}
 
export default TextButton;