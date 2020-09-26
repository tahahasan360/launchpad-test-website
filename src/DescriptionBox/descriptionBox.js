import React from 'react';
import './descriptionBox.css';

const descriptionBox = (props) => {
    return (
        <div className = "DescriptionBox"><h1> {props.heading}</h1>
        <p>{props.description}</p></div>
    )
};

export default descriptionBox;