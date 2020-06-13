import React from 'react';
import Title from './Shared/Title';
import Subtitle from './Shared/Subtitle';
import Character from './Shared/Character';
import ChangeButton from './Utils/ChangeButton';
import '../Styles/team.scss';

const Team = () => {
    return (
        <section className="team">
            <Character />
            <div className="container-title">
                <Subtitle />
                <Title />
                <p class="team-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae saepe assumenda distinctio molestias laborum unde, officiis ratione quidem obcaecati, hic tenetur similique repellendus illo dolorum veniam perferendis consectetur? Odio, delectus!</p>
            </div>
        </section>
    );
}

export default Team;
