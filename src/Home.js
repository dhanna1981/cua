import React from 'react'
import './Home.css';
import Search from './Search'
import electric from './electric.png';

function Home() {
    return (
        <div className="homeSection">
            <Search />
        <div className="home">
        <div className="homeimg">
        <img className="homeimage" src={electric} alt='electric' />
        </div>
        </div>

        </div>
    )
}

export default Home
