import React from 'react';
import './../../Styles/svgButton.scss'

const SvgButton = ({text, svgClass}) => {

    let redirect = () => console.log('Click');

    return ( 
    <button className="svgButton" onClick={redirect}>
        <div className={"svg " + svgClass}></div>
        <span>{text}</span>
    </button>
     );
}
 
export default SvgButton;