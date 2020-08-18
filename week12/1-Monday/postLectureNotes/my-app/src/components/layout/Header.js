import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to="/"> Home Page</Link>
            <Link to="/forms"> Forms</Link>
            <Link to="/projects"> projects</Link>
        </div>
    )
}
export default Header
