import React, { Component } from 'react';
import Childlist from './childList'


class List extends Component {
    render() {
        return <div>I am a list
            <Childlist name=" Chris" />
            </div>
    }
}

export default List;
