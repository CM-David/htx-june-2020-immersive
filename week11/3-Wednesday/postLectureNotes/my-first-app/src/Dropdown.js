import React, { Component } from 'react';

export class Dropdown extends Component {
    render() {
        return <select>
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
        </select>;
    }
}

export default Dropdown;
