import React from 'react';
import Grand from './Grandchild';

const Child = (props) => {
    return (
        <>
            <h2>This child name is {props.name}</h2>
            <Grand name="Chris" />
        </>
    );
};

export default Child;
