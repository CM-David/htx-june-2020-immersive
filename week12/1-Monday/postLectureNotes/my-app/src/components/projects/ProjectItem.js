import React from 'react';

const ProjectItem = (props) => {
    return <div>
        <li>
            <span>{props.proj.title}</span>
            {props.proj.category}
            <a href="#">X</a>
        </li>
    </div>;
};

export default ProjectItem;
