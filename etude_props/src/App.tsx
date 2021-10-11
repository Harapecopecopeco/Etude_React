import React from 'react';
import './App.css';
import Tool from './Tool'


const App:React.FC = () => {
  return (
    <div className="App">
        <button onClick={Tool}></button>
        <Tool />
    </div>
  );
}

export default App;
