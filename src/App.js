import './App.css';
import { Projects } from "./components/Home/Projects";
import { Gallery } from "./components/Gallery/Gallery";
import { Swim } from "./components/swim/Swim";
import { SocialMedia } from "./components/Social Media/SocialMedia";
import { Routes, Route } from "react-router-dom";
import { QApage } from './components/Gallery/QA';
import { Exhibit } from './components/Gallery/Exhibit';

import { Spotify } from './components/spotify/Spotify';
import { Valedictorian } from './components/Valedictorian/valedictorian';
import { Family } from './components/Family/Family';
import { Dreams } from './components/Dreams/dreams';
import { Garage } from './components/Dreams/garage';
import { Deserts } from './components/Dreams/desert';

import { Person } from './components/Family/Person';
import { Map } from './components/Map/Map';
import { Places } from './components/Map/Places';



import React from 'react';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Projects/>}/>
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/swim' element={<Swim />} /> 
        <Route path='/social-media' element={<SocialMedia />} />
        <Route path="/QA/:id" element={<QApage />} /> 
        <Route path="/spotify" element={<Spotify />} /> 
        <Route path="/valedictorian" element={<Valedictorian />} /> 
        <Route path="/family" element={<Family/>} /> 
        <Route path="/dreams" element={<Dreams/>} /> 
        <Route path="/sunsets" element={<Garage />} /> 
        <Route path="/deserts" element={<Deserts/>} /> 
        <Route path="/exhibit/:name" element={<Exhibit/>} /> 
        <Route path="/:name" element={<Person/>} /> 
        <Route path="/map" element={<Map/>} /> 
        <Route path="/map/:place" element={<Places/>} /> 


      </Routes>
    </div>
  );
}

export default App;
