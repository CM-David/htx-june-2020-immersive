import React from 'react'
import Header from './Header'
import Footer from './Footer'

const BaseLayout = (props) => {
    return (
        <div>
        <Header />
        <br />
            {props.children}

            <br /><br />

            <Footer />
        </div>
    )
}

export default BaseLayout
