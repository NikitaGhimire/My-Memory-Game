import React from 'react';
import logo from '../assets/nikitalogo.png';
import './Header.css';

export const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
        </div>
        
    )
};

export default Header;