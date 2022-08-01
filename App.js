import  './App.css';
import {useEffect, useState} from 'react';
import SearchIcon from './search.svg';
import Moviecard from './Moviecard.jsx';


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f36c03fb';
const movie = {
  
    
      "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
    }
  
    
const App =() => {
  const [searchterm, setSearchterm] = useState ('');
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const Response = await fetch(`${API_URL}&s=${title}`);
    const data = await Response.json();

    setMovies(data.Search);
  }
  useEffect(() =>{ 
        searchMovies('');
  }, []);
  
  
  
  return (
    <div className="app">
      <h1>movie hub</h1>
      <div className="search">
    <input 
    placeholder='search for movies'
    value={searchterm}
    onChange={(e) => setSearchterm(e.target.value)}
    />
    <img 
      src={SearchIcon}
      alt= 'search'
      onClick = { () => searchMovies(searchterm)}
    />
    </div>
      
    {
      movies?.length > 0
      ?(
        <div className='container'>
        {movies.map((movie) => (
          <Moviecard movie={movie} />
        ))} 
    </div>
      ) : (
        <div className='Empty'>
          <h2>No Movie Found</h2>
        </div>
      )
    }

    </div>
    
  );
}

export default App;
