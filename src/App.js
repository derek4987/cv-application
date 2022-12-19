// App.js

import React, { useState } from 'react';
import './App.css';
import ContactInfo from './components/ContactInfo';
import EditButton from './components/EditButton';
import Education from './components/Education';
import Experience from './components/Experience';
import SubmitButton from './components/SubmitButton';

function App() {
  return (
    <div id='bgApp'>
      <div id='appTitle'>CV Application</div>
      <div id='pageContent'>        
        <div id='contactInfoComponent'>
          <ContactInfo title="Contact Info" />
        </div>
        <div id='educationComponent'>
          <Education title="Education" />
        </div>
        <div id='experienceComponent'>
          <Experience title="Experience" />
        </div>        
      </div>  
      <div id='submitCV'>
        <SubmitButton title="Submit" />
      </div>    
    </div>
  );
}

export default App;
