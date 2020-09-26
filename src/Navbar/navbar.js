import React from 'react';
import logo from '../riceappslogo.png';
import './navbar.css'

const navbarStyle = {
    color: 'red',
    backgroundColor: 'blue',
    width: '100%',
    height: '50px',
    padding: '2%',
}


const navbar = () => {
    return (
    <div className = "Navbar">
        <img src={logo} id = "logo"></img>
        <button>Enable Dark Mode</button>
    </div>
    )
};

export default navbar;