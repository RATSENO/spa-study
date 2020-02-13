import React, { useState, useEffect } from 'react';
import HeadLine from '../components/HeadLine/HeadLine';
import PostList from '../components/PostList/PostList';
import axios from 'axios';


function Header() {

    //state hook for state setting 
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function getList(){
            const json = await axios.get('https://jsonplaceholder.typicode.com/users');
            const data = json.data;
    
            setUsers(data);
            setUser(data[0]);
            setLoading(false);
        }());
       // getList();
    }, []);

    return (
        <div className="container">

            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">

                    <div className="col-4">
                        <input type="text" id="searchText"></input>
                    </div>
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

            <HeadLine post={user}></HeadLine>

            <PostList posts={users}></PostList>
        </div>
    );
}

export default Header;