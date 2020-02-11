import React from 'react';

import './MyHeader.css'
import LogoImage from '../components/LogoImage/LogoImage'
import LearnReact from '../components/LearnReact/LearnReact';
import Info from '../components/Info/Info';
import TodoList from '../components/TodoList/TodoList';

// import logo from '../logo.svg';

class MyHeader extends React.Component{

    constructor(){
        super();
        this.state = {
            "albumId": 0,
            "id": 0,
            "title": '',
            "url": '',
            "thumbnailUrl": ''
          };
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

        /* Promise를 사용할때
        var self = this;
        fetch('https://jsonplaceholder.typicode.com/photos/4')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            self.setState(json);
        })
        */
    }

    render(){

        const { albumId, id, title, url, thumbnailUrl} = this.state;
        const fakeData = [
            'onestar1',
            'onestar2',
            'onestar3',
            'onestar4',
            'onestar5'
        ]

        return(
            <div className="App-header">
                <LogoImage logo={thumbnailUrl}></LogoImage>
                <Info fileName={id}></Info>
                <LearnReact href={url} title={title}></LearnReact>
                <TodoList data={fakeData}></TodoList>
            </div>
        );
    }
}

export default MyHeader;