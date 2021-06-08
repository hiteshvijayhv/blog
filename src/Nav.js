import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
function Nav() {
    

    return (
        <nav>
        
            <p className="nav-links">
                <Link className='link' to='/'>
                    <p>Home</p>
                </Link>

                <Link className='link' to='/blogs'>
                    <p>Blog</p>
                </Link>
                
            </p>
         
        </nav>
    )
}

export default Nav
