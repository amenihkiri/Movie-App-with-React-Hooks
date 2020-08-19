import React from 'react'
import Rate from "../Rate"
import "./SearchMovie.css"

function SearchMovie({setSearchName,setSearchRate,searchRate}) {
    return (
        <div>
        <div className='search-container'> 
           <input  type='text'
          placeholder='Type movie name to search'
          onChange={(e)=>setSearchName(e.target.value)}/> 

           <Rate
           starIndex={setSearchRate}
           rating={searchRate}
           className='star-rating' />
        </div>
        </div>
    )
}

export default SearchMovie
