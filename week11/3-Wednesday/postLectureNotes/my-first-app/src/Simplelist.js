import React, { Component } from 'react';
import Days from './days';

export class Simplelist extends Component {
    render() {

        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        return <div>
        
        <Days daysArr={days} />
        </div>;
    }
}

export default Simplelist;
