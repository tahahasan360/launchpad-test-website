import React from 'react';
import './descriptionBox.css';

const descriptionBox =  ({darkMode, heading, description}) => {
    return (
        <div className = {darkMode ? "descriptionBox-dark" : "descriptionBox-light"}>
            <h1> {heading}</h1>
            <p>{description}</p>
        </div>
    )
};

export default descriptionBox;