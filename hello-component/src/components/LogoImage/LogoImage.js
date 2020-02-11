import React from 'react';

function LogoImage({logo}){
    return(
        <img src={logo.logo} className="App-logo" alt="logo" />
    );
};

export default LogoImage;