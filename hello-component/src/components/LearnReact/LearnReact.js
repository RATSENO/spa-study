import React from 'react';

function LearnReact ({href, title}){


  return(
    <a className="App-link" href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  );  
};

export default LearnReact;