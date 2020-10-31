import React, {useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Main from "./Main";
import "./DescriptionBox/descriptionBox"
import Navbar from "./Navbar/navbar"

const App = () => {

  // Dark Mode Logic

  const [darkMode, setDarkMode] = useState(false);
  const switchDarkMode = () => {
    setDarkMode(!darkMode);
  }
  
  useEffect( () => {
    console.log(["Switched to ",darkMode ? "Dark Mode" : "Light Mode","."].join(""))
    document.title = ["Lesson 1 - ", darkMode ? "Dark Mode" : "Light Mode"].join("")
  }, [darkMode]
  );

  //----------------------------------------------------------------------------------------//

  // Text Fetching Logic

  const NoOfBoxes = 3;
  const initialMessage = [];
  for (let i = 0; i < NoOfBoxes; i++) {
    initialMessage[i] = "Loading...";
  }
  const [data, setData] = useState(initialMessage);

  const editedResponse = [];

  const fetchData = async () => {
    try {
      for (let i = 0; i < NoOfBoxes; i++) {
        const response = await fetch('https://baconipsum.com/api/?type=all-meat&sentences=2');
        [editedResponse[i]] = await response.json()
      }
      setData(editedResponse);
    }
    catch (err) {
      console.log(err);
      const errorMessage = [err.name, ": ", err.message, "."].join('');
      const errorMessageArray = [];
      for (let i = 0; i < NoOfBoxes; i++) {
        errorMessageArray[i] = errorMessage;
      }
      setData(errorMessageArray);
    }
  }

  useEffect(() => { fetchData(); }, []); 

  //----------------------------------------------------------------------------------------//

  // Declares global state

  const state = {
    darkMode,
    switchDarkMode,
    data
  }

  //----------------------------------------------------------------------------------------//

   // SWAPI API Testing

   const swapi = async () => {console.log("Async Request to SWAPI");
   const personResult = await fetch("https://swapi.dev/api/people/1");
   const personResponse = await personResult.json();
   console.log(personResponse);

   const starshipResult = await fetch(personResponse.starships[0]);
   const starshipResponse = await starshipResult.json();
   console.log(starshipResponse);
   
   const vehicleResult = await fetch(personResponse.vehicles[0]);
   const vehicleResponse = await vehicleResult.json();
   console.log(vehicleResponse);
 }

 useEffect( () => { swapi(); }, []);
 
 //----------------------------------------------------------------------------------------//

 // Global Components and Routes
  return (
    <div className="App">
      <Navbar switchDarkMode = {switchDarkMode} darkMode = {darkMode}/>
    <Routes>
      <Route path="/" element={< Main state = {state}/>} />
      <Route path="osa" element={<OSA state = {state}/>} />
      <Route path="launchpad" element={<Launchpad state = {state}/>} />
      <Route path="socialgood" element={<SocialGood state = {state}/>} />
    </Routes>
    </div>
  );
}

//----------------------------------------------------------------------------------------//

// Test Pages

const OSA = ({state}) => {
  return (
    <React.Fragment>
      <div className = {["page", state.darkMode ? "page-dark" : "page-light"].join(' ') }>
      <main>
        <h1>OSA.</h1>
        <p> {state.data[0]}</p>
      </main>
      <nav>
        <Link to = "/" className = {state.darkMode ? "page-dark" : "page-light"}>Home</Link>
      </nav>
      </div>
    </React.Fragment>
  );
}

const Launchpad =({state}) => {
  return (
    <React.Fragment>
      <div className = {["page", state.darkMode ? "page-dark" : "page-light"].join(' ') }>
      <main>
        <h1>Launchpad.</h1>
        <p>{state.data[1]}</p>
      </main>
      <nav>
        <Link to="/" className = {state.darkMode ? "page-dark" : "page-light"}>Home</Link>
      </nav>
      </div>
    </React.Fragment>
  );
}

const SocialGood = ({state}) => {
  return (
    
    <React.Fragment>
      <div className = {["page", state.darkMode ? "page-dark" : "page-light"].join(' ') }>
      <main>
        <h1>Social Good.</h1>
        <p>{state.data}</p>
      </main>
      <nav>
        <Link to="/" className = {state.darkMode ? "page-dark" : "page-light"}>Home</Link>
      </nav> 
      </div>
    </React.Fragment>
  );
}

export default App