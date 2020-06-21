import React from 'react';
import Header from './Shared/Header';
import '../Styles/home.scss';
import Title from './Shared/Title';
import Subtitle from './Shared/Subtitle';
import Information from './Shared/Information';
import RadioButton from './Utils/RadioButton';

const Home = () => {

    const text = 'We are Mostro Media a digital agency delivering amazing multimedia experience. Choose your right monster and start this adventure with us.';


    return ( 
        <div className="home">
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
            
        </div>
     );
}
 
export default Home;