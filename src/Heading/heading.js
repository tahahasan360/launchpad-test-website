import React from 'react';
import './heading.css';

const heading = ({darkMode}) => {
    return (
        <div className = {darkMode ? "heading-dark" : "heading-light"}>
            <span> This is RiceApps.</span>
        </div>
    )
};

export default heading;