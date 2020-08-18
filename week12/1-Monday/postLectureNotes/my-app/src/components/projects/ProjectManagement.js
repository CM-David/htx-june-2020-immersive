import React, { Component } from 'react'
import AddProject from './AddProject'
import {v1 as uuidv1} from 'uuid'

class ProjectManagement extends Component {
    constructor() {
        super()
        this.state = {
            projects: []
        }
    }
    componentDidMount = () =>{
        this.setState({
            projects: [
                {
                    id: uuidv1(),
                    category:"Front-End",
                    title: 'Javascript'
                },
                {
                    id: uuidv1(),
                    category:"Back-End",
                    title: 'Node'
                },
                {
                    id: uuidv1(),
                    category:"Front-End",
                    title: 'React'
                },
            ]
        })
    }


    handleAddProject = (newProject) => {

        let oldProjects = [...this.state.projects]
        oldProjects.push(newProject)

        this.setState({
            projects: oldProjects
        })

    }

    render() {
        // console.log(uuidv1())
        return (
            <div>

                <AddProject addProject={(project) => this.handleAddProject(project)} />

                {this.state.projects.map(project =>{
                    return <div key={project.id}>{project.title}{project.category}</div>
                })}
            </div>
        )
    }
}

export default ProjectManagement
