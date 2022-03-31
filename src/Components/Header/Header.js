import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt=""/>
                <div>
                    <a href=''>Order</a>
                    <a href=''>Order review</a>
                    <a href=''>Manage inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;