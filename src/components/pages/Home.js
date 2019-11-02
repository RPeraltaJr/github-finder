import React from 'react'
import Search from './../users/Search';
import Users from './../users/Users';

const Home = () => {
    return (
        <div className="container mt-3">
            <Search />
            <Users />
        </div>
    )
}

export default Home
