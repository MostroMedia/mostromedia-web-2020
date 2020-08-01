import React from 'react';
import Title from './Shared/Title';
import Subtitle from './Shared/Subtitle';
import '../Styles/skills.scss';
import Information from './Shared/Information';

import SvgButton from "./Utils/SvgButton";

const Team = () => {

    const text = 'Our team use Strategy, Development and Ceativity to create each one of our projects. And we keep things beautiful creative. ';

    return (
        <section className="skills">
            <div className="container-title">
                <Subtitle text="Discover Our Skills"
                          float="" />

                <Title text="Our Skills"
                       float="" />

                <Information text={text}
                             underline={false}
                             float="" />
            </div>
            <div className="container-skills-content">
                <SvgButton
                        svgClass="svg-web-development" 
                        text="Web development" />

                <SvgButton
                        svgClass="svg-graphic-design" 
                        text="Design" />

                <SvgButton
                        svgClass="svg-app-development" 
                        text="App development" />
            </div>
        </section>
    );
}

export default Team;
