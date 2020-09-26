import React from 'react';
import heroImage from '../heroimg.png';
import './hero.css'

const hero = () => {
    return (
    <div className = "Hero">
        <img src={heroImage} id = "heroImage"></img>
    </div>
    )
};

export default hero;