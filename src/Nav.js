import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'black'
    };

    return (
        <nav>
        
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>

                <Link style={navStyle} to='/blogs'>
                    <li>Blog</li>
                </Link>
                
            </ul>
         
        </nav>
    )
}

export default Nav
