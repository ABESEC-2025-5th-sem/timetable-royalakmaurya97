import React from 'react'
import './Search.css'

const Search = ({searchHandler}) => {
  return (
    <div className='search'>
        <input 
          type="text" 
          name='search' 
          id='search' 
          placeholder='Search for products...'
          onChange={(e) => searchHandler(e.target.value)}
        />
        <button>Search</button>
    </div>
  )
}

export default Search