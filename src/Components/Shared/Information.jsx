import React from 'react';
import '../../Styles/information.scss';

const Information = ({text, float, underline}) => {

    let position = false;

    if(float === 'left') position = true;

    return ( 
        <div className={`box-information ${underline ? 'underline' : ''} ${position ? 'left' : 'right'}`}>
            <p>{text}</p>
        </div>
     );
}
 
export default Information;