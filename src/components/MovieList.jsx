import React, {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import "./MovieList.css"
import grownupsImage from './grownups.jpg';


function MovieList () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
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
                console.log(data)
                setMovies(data.results);
            } catch(errors) {
                console.error("Error fetching moives:", errors);
            }
        };

        fetchMovies();
    }, []);


    
      
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