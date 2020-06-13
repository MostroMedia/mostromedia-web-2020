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
                            <img src="/old_logo.png" alt="Old Logo"/>
                        </div>
                        <div className="right">
                            <TextButton text="Home" />
                            <TextButton text="Team" />
                            <TextButton text="Work" />
                            <RadioButton text="Contact" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>   
     );
}
 
export default Header;