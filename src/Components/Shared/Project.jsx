import React from 'react';
import '../../Styles/project.scss';

const Project = (props) => {
    const { name, image } = props.project;
    return (
        <li className={"project " + "project-" + props.index}>
            <div className="project-content">
                <p>{name}</p>
                <img src={image} alt={name} />
            </div>
        </li>
    )
}

export default Project;