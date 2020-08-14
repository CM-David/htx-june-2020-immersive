

import React from 'react';
import Name from './Name'
import Parent from './Ex1/Parent'
import List from './List'
import Simplelist from './Simplelist'
import Dropdown from './Dropdown'

const App = () => {
    return (
        <>
            {/* <Name firstName="Chris David"/>
            <Name firstName="Michael Cortez"/>
    <Name firstName="Woody Connel"/> 
            <Parent name="Rod" />
            <List />*/}
            <Simplelist />
            <Dropdown />
        </>
    )
}

export default App