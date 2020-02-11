import React from 'react';
import logo from './logo.svg';

import HowTo from './HowTo';
import LearnReact from './LearnReact';

function Header(){
    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HowTo></HowTo>
        <LearnReact></LearnReact>
      </header>
    );
}

export default Header;