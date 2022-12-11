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
          <div className='componentTitle'>Contact Information</div> {/*add in actual component*/}
          <ContactInfo title="Contact Info Component" />
        </div>
        <div id='educationComponent'>
          <div className='componentTitle'>Education</div> {/*add in actual component*/}
          <Education title="Education Component" />
        </div>
        <div id='ExperienceComponent'>
          <div className='componentTitle'>Experience</div> {/*add in actual component*/}
          <Experience title="Experience Component" />
        </div>        
      </div>  
      <div id='submitCV'>
        <SubmitButton title="Submit" />
      </div>    
    </div>
  );
}

export default App;
