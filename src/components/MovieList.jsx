import React from 'react';
import MovieCard from './MovieCard';
import "./MovieList.css";

function MovieList({ movies, loadMore, openModal }) {
  return (
    <>
      <div className='movie-list'>
        {movies.map(movie => (
          <MovieCard 
            key={movie.id}
            id={movie.id}
            movieTitle={movie.title}
            movieArt={movie.poster_path}
            rating={Math.round(movie.vote_average * 100) / 100}
            openModal={openModal}
          />
        ))}
      </div>
      <button onClick={loadMore}>Load More</button>
    </>
  );
}

export default MovieList;
