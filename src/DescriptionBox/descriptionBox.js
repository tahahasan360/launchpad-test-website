import React from 'react';
import './descriptionBox.css';
import {Link} from "react-router-dom";

const descriptionBox =  ({darkMode, heading, description, link}) => {
    return (
        <div className = {[
            "descriptionBox", 
            darkMode ? "descriptionBox-dark" : "descriptionBox-light"].join(' ')}>
            <Link to = {link}>
                <h1> {heading} </h1>
            </Link>
            <p> {description} </p>
        </div>
    )
};

export default descriptionBox;