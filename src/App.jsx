import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import grownupsImage from './assets/grownups.jpg';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='movie-cards'>
      <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt={grownupsImage}></MovieCard>
      <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt={grownupsImage}></MovieCard>
      <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt={grownupsImage}></MovieCard>
      <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt={grownupsImage}></MovieCard>
      <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt={grownupsImage}></MovieCard>
      </div>
      <button>Load More</button>
    </div>

  );
}

export default App;
