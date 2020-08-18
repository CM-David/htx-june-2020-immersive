import React from 'react'
import ProjectItem from './ProjectItem'

const Project = (props) => {
    let projectsArr = props.projects.map(project =>{
        return <ProjectItem  proj={project} /> 
    })

    return (
        <>
            Project

            {projectsArr}
        </>
    )
}

export default Project
