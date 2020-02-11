import React from 'react';

class LearnReact extends React.Component{
  
  myData = {
    name : "onestar"
  };
  
  constructor(){
    super();
    console.log("Learn React 생성자 호출됨");
  }

  componentDidMount(){
    console.log("Learn React ComponnetDidMount 호출됨");
  };

  componentWillUnmount(){
    console.log("Learn React ComponnetWillMount 호출됨");
  };

  render(){
    console.log("Learn React Render 호출됨");
      return(
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React {this.myData.name}
        </a>
    );
  }
};

export default LearnReact;