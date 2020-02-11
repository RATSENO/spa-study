import React from 'react';

class Info extends React.Component{

  render(){
    return (
      <p>
      Edit <code>{this.props.fileName}</code> and save to reload.
      </p>
    );
  }
}

export default Info;