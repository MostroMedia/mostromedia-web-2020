import React from 'react';
import Title from './Shared/Title';
import Subtitle from './Shared/Subtitle';
import Project from './Shared/Project';
import '../Styles/work.scss';

// Images
import project1 from '../Images/Projects/Project1/0001.png';
import project2 from '../Images/Projects/Project2/0001.png';
import project3 from '../Images/Projects/Project3/0001.png';
import project4 from '../Images/Projects/Project4/0001.png';
import project5 from '../Images/Projects/Project5/0001.png';
import project6 from '../Images/Projects/Project6/0001.png';

const Work = () => {
    const projects = [
        {
            name: 'Project 1',
            image: project1
        },
        {
            name: 'Project 2',
            image: project2
        },
        {
            name: 'Project 3',
            image: project3
        },
        {
            name: 'Project 4',
            image: project4
        },
        {
            name: 'Project 5',
            image: project5
        },
        {
            name: 'Project 6',
            image: project6
        }
    ];
    return (
        <section className="work">
            <div className="container-work-title">
                <Subtitle />
                <Title />
            </div>
            <ul className="container-projects">
                { projects.map((project, index) => <Project project={project} index={index} key={index} />) }
            </ul>
        </section>
    );
}

export default Work;
