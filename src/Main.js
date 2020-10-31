import React, { useState, } from 'react';
import useInterval from '@use-it/interval';
import './App.css';
import Hero from './Hero/hero.js'
import Heading from './Heading/heading.js'
import DescriptionBox from './DescriptionBox/descriptionBox.js';

const Main = ({state}) => {

  // Dark Mode Variables

  const darkMode = state.darkMode;

  //----------------------------------------------------------------------------------------//

  // Image Switching Logic

  const delay = 3000
  const noOfImages = 4

  const [imageTimer, setImageTimer] = useState(0);
    
  useInterval(() => {
      setImageTimer(currentCount => (currentCount + 1) % noOfImages);
  }, delay)

  //----------------------------------------------------------------------------------------//
  
  // Text Fetching Variables

  const data = state.data;
  const boxContent = [
    { 
      heading: "OSA.",
      description: data[0],
      link: "/osa"
    }, 

    { 
      heading: "Launchpad.",
      description: data[1],
      link: "/launchpad"
    }, 

    { 
      heading: "Social Good.",
      description: data[2],
      link: "/socialgood"
    }, 
  ]

  // Renders the DOM 
  return (
    
    <React.Fragment>
    <div className ="App">
      <Hero imageNumber = {imageTimer}/>
      <Heading darkMode = {darkMode}/>
      <div className = {["boxContainer", darkMode ? "boxContainer-dark" : "boxContainer-light"].join(' ')}>
        { boxContent.map( content => {
        return (
          <DescriptionBox 
          darkMode = {darkMode} 
          heading = {content.heading} 
          description = {content.description}
          link = {content.link} />
          )})} 
      </div>
    </div>
    </React.Fragment>
  );
}

export default Main;
