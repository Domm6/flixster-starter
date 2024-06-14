import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currMovie, setCurrMovie] = useState(0);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currPage, setCurrPage] = useState(1);
  const [sortOption, setSortOption] = useState('');
  const[trailer, setTrailer] = useState('');
  const[genres, setGenres] = useState([])

  const openModal = async (movieId) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdkMDQ1NjQ1MWQ4MjAzN2JkYjViZDZjOTIyYjkxMyIsInN1YiI6IjY2NjdkNjM5NjljZjhmN2ZiMDg1YmY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IHp2bMxcshTEp8GwPeQxuJsldao0ym5L1KVgBnTdhY4'
      }
    };

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos&language=en-US`, options);
      const currMovie = await response.json();
      setCurrMovie(currMovie);
      // get trailer info
      let trailerInfo = currMovie.videos.results.find(video => video.type === "Trailer" && video.official === true);

      if (trailerInfo) {
        let trailerKey = trailerInfo.key;
        setTrailer(`https://www.youtube.com/embed/${trailerKey}`);
      } else {
        console.log("No official trailer found");
        setTrailer(''); 
      }

    } catch(errors) {
      console.error("Error fetching movies:", errors);
    }

    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const fData = new FormData(form);
    setSearchTerm(fData.get('search'));
    setCurrPage(1);
    setMovies([]);
  };

  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value || ''; // Set to null for default
    setSortOption(selectedSortOption);
    setCurrPage(1);
    setMovies([]);
  };

  const loadMore = () => {
    setCurrPage(currPage + 1);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      let url;
      if (searchTerm) {
        url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=${currPage}`;
      } else {
        url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currPage}`;
      }
      if (sortOption) {
        url += `&sort_by=${sortOption}`;
      }

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
        setMovies(prevMovies => {
          const movieSet = new Set(prevMovies.map(movie => movie.id));
          const newMovies = data.results.filter(movie => !movieSet.has(movie.id));
          return [...prevMovies, ...newMovies];
        });
      } catch(errors) {
        console.error("Error fetching movies:", errors);
      }
    };

    fetchMovies();
  }, [searchTerm, currPage, sortOption]); // if any of these changes, refresh

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} handleSortChange={handleSortChange} searchTerm={searchTerm} />
      <div className='movie-cards'>
        <MovieList movies={movies} loadMore={loadMore} openModal={openModal} />
      </div>
      <div className='movie-modal'>
        {isModalVisible && (
          <Modal 
            movieTitle={currMovie.original_title} 
            releaseDate={currMovie.release_date} 
            overview={currMovie.overview}
            genre={currMovie.genres}
            movieArt={currMovie.poster_path} 
            trailerUrl={trailer}
            runtime={currMovie.runtime}
            onClose={closeModal} 
          />
        )}
      </div>
      <div className='app-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
