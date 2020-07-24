import React from 'react'
import './Home.css';
import electric from './electric.png';
import Search from './Search';

function Home() {
    return (

        <div className='homeSection'>
            <div className='searchBox'>
            <Search />
            <div>
             <img className='homeImage' src={electric} alt="electric" />;
             </div>
          </div>
          </div>
   )
}

export default Home
