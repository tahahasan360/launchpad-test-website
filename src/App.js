import React, { Hooks } from 'react';
import './App.css';
import Navbar from './Navbar/navbar.js';
import Hero from './Hero/hero.js'
import Heading from './Heading/heading.js'
import DescriptionBox from './DescriptionBox/descriptionBox.js';

function App() {
  return (
    <div className ="App">
      <Navbar/>
      <Hero/>
      <Heading />
      <div className = "boxContainer">
        <DescriptionBox heading = "OSA." description = "Our premier summer internship for underclassmen, 
        mentorship, impactful projects and more can be found in the open source accelerator: the first
        program of its kind in the United States."/>
        <DescriptionBox heading = "Launchpad." description = "Our premier fall program for web developers. 
        Launchpad is where impact begins and learning ends: the first program of its kind in the United 
        States."/>
        <DescriptionBox heading = "Social Good." description = "This is the heart of Rice Apps: if there 
        is no impact, there is no project. We're always looking for new opportunities to create good through
        our digital solutions, so please reach out if your organization needs dedicated problem-solvers to 
        tackle an issue."/>
      </div>
    </div>
  );
}

export default App;
