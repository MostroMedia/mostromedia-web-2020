import React from 'react';
import './../../Styles/radioButton.scss'

const RadioButton = ({text}) => {

    let redirect = () => console.log('Click');

    return ( 
    <button className="radioButton" onClick={redirect}>
        <span>{text}</span>
    </button>
     );
}
 
export default RadioButton;