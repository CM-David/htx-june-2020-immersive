import React, { Component } from 'react';
import {Form, Col, FormGroup} from 'react-bootstrap'
import {v1 as uuidv1} from 'uuid'

class AddProject extends Component {

    handleSubmit = (e) =>{

        e.preventDefault()

        let project = {
            id: uuidv1(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }
        this.props.addProject(project)
    }



    render() {
        return <div>

        <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
         <Col>
            <input ref='title' type="text"  placeholder="title"/>
         </Col>
        </Form.Group>
        <FormGroup>
            <select ref="category">
                <option>Front-End</option>
                <option>Back-End</option>
        
            </select>
        
        </FormGroup>
    
      <input type="submit" className="buttonStyle" value='submit'/>
      </Form>
        </div>;
    }
}

export default AddProject;
