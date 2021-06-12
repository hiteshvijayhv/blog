import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
function Nav() {
    

    return (
        <nav>
            <div className="nav-links">
                <Link className='link' to='/'>
                    <div className='home-link'>
                        <div className='name'>Hitesh</div>
                        <div className='surname'>Vijay</div>
                    </div>
                </Link>

                <Link className='link' to='/blogs'>
                    <div className='blog-div'>Blog</div>
                </Link>
                
            </div>
         
        </nav>
    )
}

export default Nav
