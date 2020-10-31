import React from 'react';
import './hero.css'

const hero = ({imageNumber}) => {

    return (
    <div className = "Hero">
        <div id = "heroImage" alt = '' className = {["image", JSON.stringify(imageNumber)].join('')}></div>
    </div>
    )
};

export default hero;