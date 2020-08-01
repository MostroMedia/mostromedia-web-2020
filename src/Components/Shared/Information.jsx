import React from 'react';
import '../../Styles/information.scss';

const Information = ({text, float, underline}) => {

    return ( 
        <div className={`box-information ${underline ? 'underline' : ''} ${float}`}>
            <p>{text}</p>
        </div>
     );
}
 
export default Information;