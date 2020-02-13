import React from 'react';
import HeadLine from '../components/HeadLine/HeadLine';
import PostList from '../components/PostList/PostList';
import PostListClas from '../components/PostList/PostListClas';


class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            user : {},
            users: [],
            loading : true
        }
        this.handleTestButton = this.handleTestButton.bind(this);
    }

    handleTestButton(){
        this.setState({
            loading : !this.state.loading
        });
        console.log(this.state.loading);
        alert("클릭됨");
    }

    //arrow function 을 하게되면 this바인딩 필요 없음
    handleTestButton2 = (a, b, e) => {
        this.setState({
            loading : !this.state.loading
        });
        console.log("===========handleTestButton2===========");
        console.log(a);
        console.log(b);
        console.log(e);
        console.log(this.state.loading);
        alert("클릭됨");
        console.log("===========handleTestButton2===========");
    }

    async componentDidMount(){
        
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await data.json();

        this.setState({
            user : json[0],
            users : json,
            loading : false
        });
    }

    render() {
        console.log(this.state.users);
        return (
            <div className="container">

                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                            <a className="text-muted" href="#">Subscribe</a>
                        </div>
                        <div className="col-4 text-center">
                            <a className="blog-header-logo text-dark" href="#">Large</a>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="text-muted" href="#" aria-disabled="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" /></svg>
                            </a>
                            <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn btn-info" onClick={(e) => this.handleTestButton2("test1", "test2", e)}>TEST</button>
                    </div>
                </header>

                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        <a className="p-2 text-muted" href="#">World</a>
                        <a className="p-2 text-muted" href="#">U.S.</a>
                        <a className="p-2 text-muted" href="#">Technology</a>
                        <a className="p-2 text-muted" href="#">Design</a>
                        <a className="p-2 text-muted" href="#">Culture</a>
                        <a className="p-2 text-muted" href="#">Business</a>
                        <a className="p-2 text-muted" href="#">Politics</a>
                        <a className="p-2 text-muted" href="#">Opinion</a>
                        <a className="p-2 text-muted" href="#">Science</a>
                        <a className="p-2 text-muted" href="#">Health</a>
                        <a className="p-2 text-muted" href="#">Style</a>
                        <a className="p-2 text-muted" href="#">Travel</a>
                    </nav>
                </div>

                <HeadLine post={this.state.user}></HeadLine>

                <PostList posts={this.state.users}></PostList>
            </div>
        );
    }
}

export default Header;