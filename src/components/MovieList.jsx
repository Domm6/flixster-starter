import React, {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import "./MovieList.css"


function MovieList ({openModal}) {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const[currPage, setCurrPage] = useState(1);

    function handleSubmit(event){
      event.preventDefault();
      const form = event.target;
      const fData = new FormData(form);
      setSearchTerm(fData.get('search'))
    }

    function loadMoreMovies() {
      const newPage = currentPage + 1;
      setCurrPage(newPage);
      fetchMovies(newPage);

    }



    useEffect(() => {
      const fetchMovies = async () => {
        const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`
        const url = searchTerm ? searchUrl : baseUrl
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdkMDQ1NjQ1MWQ4MjAzN2JkYjViZDZjOTIyYjkxMyIsInN1YiI6IjY2NjdkNjM5NjljZjhmN2ZiMDg1YmY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IHp2bMxcshTEp8GwPeQxuJsldao0ym5L1KVgBnTdhY4'
          }
        };
  
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setMovies(prevMovies => [...prevMovies,...data.results]);
        } catch(errors) {
            console.error("Error fetching moives:", errors);
        }
      };
      
      fetchMovies();
    }, [searchTerm]);

      
    return (
      <>
      <form className="header-form" onSubmit={handleSubmit}>
        <input  htmlFor={searchTerm} name="search"></input>
        <button type="submit">Submit</button>
      </form>
      <h1>Flixster</h1>
      <form className="filter">
          <label>Movie Type:
              <select>
                  {/* <option value="1" onClick={hanleChange}>Genres</option> */}
                  <option value="2">Release Date</option>
                  <option value="3">Highest Rating</option>
              </select>
          </label>
      </form>


      <div className='movie-list'>
        {movies.map(function (movie) {
          return (

            <MovieCard 
            key={movie.id}
            id={movie.id}
            movieTitle={movie.title}
            movieArt={movie.poster_path}
            rating={Math.round(movie.vote_average * 100) / 100}
            openModal={openModal}
            ></MovieCard>

          );

        })};
      </div>
      </>

    )
}

export default MovieList