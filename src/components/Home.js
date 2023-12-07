import React from 'react';
import Products from '../components/Products';
import banner from '../asset/banner1_up.png';

const Home = () => {
    return (
        <div>
            <h2 className="heading"> Welcome to the Redux toolkit store</h2>
            <img className='banner' src={banner} alt='banner'/>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;