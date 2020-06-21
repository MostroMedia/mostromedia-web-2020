import React from 'react';
import Header from './Shared/Header';
import '../Styles/home.scss';
import Title from './Shared/Title';
import Subtitle from './Shared/Subtitle';
import Information from './Shared/Information';
import RadioButton from './Utils/RadioButton';
import mostroPurple from "../Images/Mostros/mostro_0001.png";
import mostroYellow from "../Images/Mostros/mostro_0002.png";
import mostroOrange from "../Images/Mostros/mostro_0003.png";

const Home = () => {

    const text = 'We are Mostro Media a digital agency delivering amazing multimedia experience. Choose your right monster and start this adventure with us.';


    return ( 
        <div className="home">
            {/* <img src="/svg/desktop-back.svg" alt=""/> */}
            <Header />
            <div className="center">
                <div className="container-banner">
                    <div className="one-column"></div>
                    <div className="four-column">
                        <Subtitle text="Welcome to Motro Media"
                                  float="left" />

                        <Title text="Choose your Adventure Monster"
                               float="left" />

                        <Information text={text}
                                     underline={true}
                                     float="left" />

                        <RadioButton text="Learn More"/>
                    </div>
                    <div className="seven-column"></div>
                </div>
            </div>
            <div className="container-monsters">
                <img src={mostroPurple} className="monster-one" alt="Monster One"/>
                <img src={mostroYellow} className="monster-two" alt="Monster Two"/>
                <img src={mostroOrange} className="monster-three" alt="Monster Three"/>
            </div>
        </div>
     );
}
 
export default Home;