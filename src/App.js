import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  //let [number, setNumber] = useState(45);
  let value = 81;
  return (
    <ValueContext.Provider value={value}>
      <div >
        Hello World
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
    
  );
}

export default App;
