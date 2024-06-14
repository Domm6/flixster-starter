import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Modal from './components/Modal';


function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // currentMovie
  const [currMovie, setCurrMovie] = useState(0);


  const openModal = async (movieId) => {
    // api call
    const url = 'https://api.themoviedb.org/3/movie/653346?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdkMDQ1NjQ1MWQ4MjAzN2JkYjViZDZjOTIyYjkxMyIsInN1YiI6IjY2NjdkNjM5NjljZjhmN2ZiMDg1YmY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IHp2bMxcshTEp8GwPeQxuJsldao0ym5L1KVgBnTdhY4'
      }
    };

    try {
      const response = fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
      .then(response => response.json())
      .then(currMovie => {
        setCurrMovie(currMovie);
        console.log(currMovie)
      })
    } catch(errors) {
      console.error("Error fetching moives:", errors);
    }

    setIsModalVisible(true);
    console.log(movieId);
    
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className='movie-cards'>
        <MovieList openModal={openModal}></MovieList>
      </div>
\      <div className='movie-modal'>
        {isModalVisible && (
          <Modal 
          movieTitle={currMovie.original_title} 
          releaseDate={currMovie.release_date} 
          overview={currMovie.overview}
          genre={currMovie.genres}
          movieArt={currMovie.poster_path} 
          onClose={closeModal}></Modal>
        )}
      </div>
      <div className='app-footer'>
        <Footer></Footer>
      </div>

    </div>

  );
}

export default App;


//onClick={loadMoreMovies}