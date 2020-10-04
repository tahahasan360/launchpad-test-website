import React from 'react';
import './descriptionBox.css';

const descriptionBox =  ({darkMode, heading, description}) => {
    return (
        <div className = {[
            "descriptionBox", 
            darkMode ? "descriptionBox-dark" : "descriptionBox-light"].join(' ')}>
            <h1> {heading} </h1>
            <p> {description} </p>
        </div>
    )
};

export default descriptionBox;