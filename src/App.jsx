import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Modal from './components/Modal';
import grownupsImage from './assets/grownups.jpg';


function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <Header></Header>
      <MovieList></MovieList>
      <button>Load More</button>
      <div className='movie-modal'>
        <Modal movieTitle="Grown Ups" releaseDate="11/04/2003" overview="A movie about a old grown ups who rekindle and live there lives as kids again."
        genre="Comedy" movieArt={grownupsImage}></Modal>
        
      </div>
      <div className='app-footer'>
        <Footer></Footer>
      </div>

    </div>

  );
}

export default App;
