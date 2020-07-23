import React from 'react'
import './Search.css';

const Search = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
          <div className='center pt6'>
            <div className='form pa4 br3 shadow-5'>
              <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
              <button
                className='w-30 grow f4 link ph3 pv2 dib white bg-blue'
                onClick={onButtonSubmit}
              >Search by Zip</button>
            </div>
          </div>
        </div>
      );
    }


export default Search