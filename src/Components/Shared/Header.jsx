import React, {Fragment} from 'react';
import TextButton from './../Utils/TextButton';
import RadioButton from './../Utils/RadioButton';
import './../../Styles/header.scss';
import { getResolutionKey } from "../Utils/utils"

const Header = () => {
    return ( 
        <Fragment>
            <div className="menu">
                <div className="center">
                    <div className="menu-container">
                        <div className="left">
                            <a href="/"><img src="/logotype.png" alt="New Logo"/></a>
                        </div>
                        <Menu />
                    </div>
                </div>
            </div>
        </Fragment>   
     );
}


const Menu = () => {
    
    const openMenu = (event) => {
        //event.target.className += " open";
        console.log("Menu Open")
    }

    if ( "small" == getResolutionKey() || "xsmall" == getResolutionKey() ){
        return (
            <button className="items-menu-mobile" onClick={openMenu} >
                <span></span>
                <span></span>
                <span></span>
            </button>
        )

    } else if ( "large" == getResolutionKey() || "xlarge" == getResolutionKey() ) {
        return (
            <div className="right items-menu-desktop">
                <TextButton text="Home" />
                <TextButton text="Team" />
                <TextButton text="Work" />
                <TextButton text="Contact Us" />
            </div>
        )
    } else {
        return <div></div>
    }
}
 
export default Header;