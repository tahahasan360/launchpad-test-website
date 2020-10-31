import React from 'react';
import logo from '../riceappslogo.png';
import './navbar.css'
import {Link} from "react-router-dom"

const navbar = ({switchDarkMode, darkMode}) => {
    return (
    <div className = {["Navbar", darkMode ? "Navbar-dark" : "Navbar-light"].join(' ')}>
        <Link to = '/'>
            <img src={logo} id = "logo" alt = ''></img>
        </Link>
        <button 
        id = "darkModeButton" 
        onClick = {switchDarkMode} 
        className = {darkMode ? "button-dark" : "button-light"}>
            {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
        </button>
    </div>
    )
};

export default navbar;