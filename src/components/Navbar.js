import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div className='navbar'
        >
            <span className="logo">React Cart</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart-item: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
