import React from 'react';
import Title from './Shared/Title';
import Subtitle from './Shared/Subtitle';
import Character from './Shared/Character';
import ChangeButton from './Utils/ChangeButton';
import '../Styles/team.scss';
import Information from './Shared/Information';

const Team = () => {

    const text = 'We are more than monster, we are a creative and smart team ready for any adventure.';

    return (
        <section className="team">
            <Character />
            <div className="container-title">
                <Subtitle text="Discover Our Team"
                          float="right" />

                <Title text="The Team"
                       float="right" />

                <Information text={text}
                             underline={true}
                             float="right" />
            </div>
        </section>
    );
}

export default Team;
