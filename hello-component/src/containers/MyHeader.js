import React from 'react';

import './MyHeader.css'
import LogoImage from '../components/LogoImage/LogoImage'
import LearnReact from '../components/LearnReact/LearnReact';
import Info from '../components/Info/Info';

import logo from '../logo.svg';

function MyHeader(){

    const imgSrc = logo;
    const file = 'src/App.js'

    return(
        <>
            <LogoImage src={imgSrc}></LogoImage>
            <Info fileName={file}></Info>
            <LearnReact></LearnReact>
        </>
    );
}

export default MyHeader;