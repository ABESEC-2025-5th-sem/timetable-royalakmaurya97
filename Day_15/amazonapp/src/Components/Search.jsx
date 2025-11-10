import React from 'react'

const Search = ({searchHandler}) => {
  return (
    <div className='search'>
        <input type="text" name='search' id='search' onChange={(e) => searchHandler(e.target.value)}/>
        <button>Search</button>
    </div>
  )
}

export default Search