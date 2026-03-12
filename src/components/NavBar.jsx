import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"

const NavBar = () => {
  return (
    
    <nav className='navbar' >

        <div className='navbar_brand'>
            <Link to = "/" >Movie App</Link>
        </div>

        <div className='navbar_links' >
            <Link to="/" className='nav_lins' >Home</Link>
            <Link to="/favorites" className='nav_lins' >Favorites</Link>
        </div>

    </nav>

  )
}

export default NavBar
