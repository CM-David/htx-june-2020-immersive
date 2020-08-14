import React, { Component } from 'react';

export class Days extends Component {
    render() {
        let days = this.props.daysArr.map(day =>{
            return <li>{day}</li>
        })
        return <div>
         <ul>{days}</ul>
        </div>;
    }
}

export default Days;
