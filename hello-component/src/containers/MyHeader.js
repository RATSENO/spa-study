import React from 'react';

import './MyHeader.css'
import LogoImage from '../components/LogoImage/LogoImage'
import LearnReact from '../components/LearnReact/LearnReact';
import Info from '../components/Info/Info';

import logo from '../logo.svg';

function MyHeader(){

    // const imgSrc = logo;
    // const file = 'src/App.js'
    // const href = 'https://reactjs.org';
    // const title = 'Learn React';

    const myData = {
        logo,
        fileName : 'src/App.js',
        href : 'https://reactjs.org',
        title : 'Learn React'
    };

    return(
        <>
            <LogoImage logo={myData}></LogoImage>
            <Info fileName={myData.file}></Info>
            <LearnReact href={myData.href} title={myData.title}></LearnReact>
        </>
    );
}

export default MyHeader;