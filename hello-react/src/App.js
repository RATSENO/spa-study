import React from 'react';
import logo from './logo.svg';
import './App.css';
import LearnReact from './LearnReact';
import HowTo from './HowTo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HowTo></HowTo>
        <LearnReact></LearnReact>
      </header>
    </div>
  );
}

export default App;
