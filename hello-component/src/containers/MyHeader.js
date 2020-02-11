import React from 'react';

import './MyHeader.css'
import LogoImage from '../components/LogoImage/LogoImage'
import LearnReact from '../components/LearnReact/LearnReact';
import Info from '../components/Info/Info';

import logo from '../logo.svg';

class MyHeader extends React.Component{

    self = this;

    constructor(){
        super();
        this.state = {};
    }

    async componentDidMount(){

        //렌더링 후 콜백되는 함수
        //여기서 주로 데이터를 초기 세팅한다.
        //데이터는 주로 백엔드에서 JSON형태로 데이터를 가져온다.
        const data = await fetch('https://jsonplaceholder.typicode.com/photos/4');
        const json = await data.json();
        this.setState(json);

        // this.setState({
        //     logo,
        //     fileName : 'src/App.js',
        //     href : 'https://reactjs.org',
        //     title : 'Learn React'
        // });
    }

    render(){
        return(
            <>
                <LogoImage logo={this.state.thumbnailUrl}></LogoImage>
                <Info fileName={this.state.id}></Info>
                <LearnReact href={this.state.url} title={this.state.title}></LearnReact>
            </>
        );
    }


}

export default MyHeader;