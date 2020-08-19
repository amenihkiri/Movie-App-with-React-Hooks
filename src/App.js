import React,{useState} from 'react';
import {moviesData} from "./component/MoviesData";
import MovieList from "./component/MovieList";
import SearchMovie from "./component/SearchMovie/SearchMovie";
import AddMovie from "./component/AddMovie/AddMovie"

import './App.css';

function App() {

const [moviesList, setMoviesList] = useState(moviesData);
const [searchName, setSearchName] = useState("")
const [searchRate, setSearchRate] = useState(1);

const addMovie=(newMovie)=>{
  setMoviesList([...moviesList, newMovie])
}

  return (
    <div className="App">
    <SearchMovie 
    setSearchName={setSearchName}
    setSearchRate={setSearchRate}
    searchRate={searchRate}
    />
    
    <MovieList
     moviesList={moviesList}
    searchName={searchName}
    searchRate={searchRate}
    />
    <AddMovie addMovie={addMovie} />
    
    </div>
  );
}

export default App;
