import React from 'react';
import Child from './Child';

const Parent = (props) => {
    return (
        <>
            <h1>This parent name is {props.name}</h1>
            <Child name="John"/>
        </>
    );
};

export default Parent;
