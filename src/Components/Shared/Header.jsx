import React, {Fragment} from 'react';
import TextButton from './../Utils/TextButton';
import RadioButton from './../Utils/RadioButton';
import './../../Styles/header.scss';

const Header = () => {
    return ( 
        <Fragment>
            <div className="menu">
                <div className="center">
                    <div className="grid-container">
                        <div className="left">
                            <a href="/"><img src="/logotype.png" alt="New Logo"/></a>
                        </div>
                        <div className="right">
                            <TextButton text="Home" />
                            <TextButton text="Team" />
                            <TextButton text="Work" />
                            <TextButton text="Contact Us" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>   
     );
}
 
export default Header;