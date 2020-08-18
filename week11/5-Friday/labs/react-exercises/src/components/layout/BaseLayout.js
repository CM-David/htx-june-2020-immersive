import React from 'react'
import Header from './Header'
import Footer from './Footer'

const BaseLayout = (props) => {
    return <div>
    
    <Header /> <br/><br/>

    {props.children}

    <br/>
    <Footer /> <br/>
    
    </div>;
};


export default BaseLayout