import React, {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import "./MovieList.css"

function MovieList () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VITE_APP_TMDB_API_KEY}`');
                const data = await response.json();
                setMovies(data.results);
            } catch(errors) {
                console.error("Error fetching moives:", errors);
            }
        };

        fetchMovies();
    }, []);



    // fetch movie database api
    const fetch = require('node-fetch');

    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdkMDQ1NjQ1MWQ4MjAzN2JkYjViZDZjOTIyYjkxMyIsInN1YiI6IjY2NjdkNjM5NjljZjhmN2ZiMDg1YmY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IHp2bMxcshTEp8GwPeQxuJsldao0ym5L1KVgBnTdhY4'
    }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
    
      
    return (
      <div className='movie-list'>
        <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt={grownupsImage}></MovieCard>
        <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt={grownupsImage}></MovieCard>
        <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt={grownupsImage}></MovieCard>
        <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt={grownupsImage}></MovieCard>
        <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt={grownupsImage}></MovieCard>
        <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt={grownupsImage}></MovieCard>
        <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt={grownupsImage}></MovieCard>
      </div>

    )
}

export default MovieList