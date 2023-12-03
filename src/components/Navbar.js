import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
{/* <style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
</style> */}

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">React Cart</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
