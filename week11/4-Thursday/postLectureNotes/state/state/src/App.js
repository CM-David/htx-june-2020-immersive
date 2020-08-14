import React, { Component } from 'react';

export class App extends Component {

    constructor() {
        super()
        this.state = {
            txt: 'this is text'
        }
    }
    render() {
        return <>
        {this.state.txt}
        </>;
    }
}

export default App;
