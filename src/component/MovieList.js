import React from 'react'
import MovieCard from "./MovieCard/MovieCard"


 function MovieList({moviesList,searchName,searchRate}) {
   
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}>

            
          {moviesList.filter(el=> 
           el.rating >= searchRate &&
          el.name.toLowerCase().includes(searchName.toLowerCase().trim()))
          .map((movie,i)=>
          
          <MovieCard movie={movie} key={i} />
          )}  
        </div>
    )
}

export default MovieList