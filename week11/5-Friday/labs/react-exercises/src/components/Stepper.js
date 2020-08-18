import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

class Stepper extends Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
    }
increment = () =>{
    this.setState({
        value: this.state.value + 1
    })
}

decrement = () =>{
    this.setState({
        value: this.state.value - 1
    })
}

    state
    render() {
        return <div>
        
    <Button variant="primary" size="md" onClick={this.increment}>+</Button>
        <h1>{this.state.value}</h1>
    <Button variant="secondary" size="md" onClick={this.decrement}>-</Button>
        </div>
    }
}

export default Stepper;
