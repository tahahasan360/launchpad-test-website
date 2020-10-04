import React from 'react';
import './heading.css';

const heading = ({darkMode}) => {
    return (
        <div className = {["heading", darkMode ? "heading-dark" : "heading-light"].join(' ')}>
            <span> This is RiceApps.</span>
        </div>
    )
};

export default heading;