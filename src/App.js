import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar/navbar.js';
import Hero from './Hero/hero.js'
import Heading from './Heading/heading.js'
import DescriptionBox from './DescriptionBox/descriptionBox.js';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const switchDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  }

  const boxContent = [
    { 
      heading: "OSA",
      description: "Our premier summer internship for underclassmen, \
    mentorship, impactful projects and more can be found in the open source accelerator: \
    the first program of its kind in the United States."
    }, 

    { 
      heading: "Launchpad.",
      description: "Our premier fall program for web developers. \
      Launchpad is where impact begins and learning ends: the first program of its kind in the United States."
    }, 

    { 
      heading: "Social Good.",
      description: "This is the heart of Rice Apps: if there is no impact, there is no project. We're always looking for \
      new opportunities to create good through our digital solutions, so please reach out if your organization\
      needs dedicated problem-solvers to tackle an issue."
    }, 
  ]

  return (
    <div className ="App">
      <Navbar switchDarkMode = {switchDarkMode} darkMode = {darkMode}/>
      <Hero/>
      <Heading darkMode = {darkMode}/>
      <div className = {["boxContainer", darkMode ? "boxContainer-dark" : "boxContainer-light"].join(' ')}>
        { boxContent.map( content => {
        return (
          <DescriptionBox 
          darkMode = {darkMode} 
          heading = {content.heading} 
          description = {content.description}/>
          )})} 
      </div>
    </div>
  );
}

export default App;
