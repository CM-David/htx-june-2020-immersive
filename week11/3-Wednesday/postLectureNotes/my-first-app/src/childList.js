import React, { Component } from 'react';

class Childlist extends Component {
    render() {
        return <div>hey this is a child
        {this.props.name}
        </div>;
    
    }
}

export default Childlist;
