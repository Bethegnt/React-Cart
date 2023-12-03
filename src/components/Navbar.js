import React from 'react';
import { Link } from 'react-routes-dom';

const Navbar = () => {
  return (
    <div>
        
        <span className='logo'>Redux Store</span>
        <div>
            <Link className="navLink" to="/">
                Home
            </Link>
            <Link className="navLink" to="cart">
                Cart
            </Link>
            <span className='cartCount'> Cart items: 0</span>
        </div>
    </div>
  )
}

export default Navbar;