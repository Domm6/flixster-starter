import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MovieCard movieTitle="Grown Ups" rating="5.0" movieArt=""></MovieCard>
      <button>Load More</button>
    </div>

  );
}

export default App;
