import React from 'react';
import logo from '../riceappslogo.png';
import './navbar.css'

const navbar = ({switchDarkMode, darkMode}) => {
    console.log(darkMode);
    return (
    <div className = {darkMode ? "Navbar-dark" : "Navbar-light"}>
        <img src={logo} id = "logo"></img>
        <button 
        id = "darkModeButton" 
        onClick = {switchDarkMode} 
        className = {darkMode ? "button-dark" : "button-light"}>
            {darkMode ?"Enable Light Mode" : "Enable Dark Mode"}
        </button>
    </div>
    )
};

export default navbar;