import React from 'react';

import './MyHeader.css'
import LogoImage from '../components/LogoImage/LogoImage'
import LearnReact from '../components/LearnReact/LearnReact';
import Info from '../components/Info/Info';

import logo from '../logo.svg';

class MyHeader extends React.Component{

    constructor(){
        super();
        this.state = {};
    }

    componentDidMount(){
        //렌더링 후 콜백되는 함수
        //여기서 주로 데이터를 초기 세팅한다.
        //데이터는 주로 백엔드에서 JSON형태로 데이터를 가져온다.
        this.setState({
            logo,
            fileName : 'src/App.js',
            href : 'https://reactjs.org',
            title : 'Learn React'
        });
    }

    render(){
        return(
            <>
                <LogoImage logo={this.state.logo}></LogoImage>
                <Info fileName={this.state.file}></Info>
                <LearnReact href={this.state.href} title={this.state.title}></LearnReact>
            </>
        );
    }


}

export default MyHeader;