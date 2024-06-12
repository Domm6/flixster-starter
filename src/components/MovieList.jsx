import "./MovieList.css"

function MovieList () {
      // fetch movie database api
    const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

    return (

    )
}

export default MovieList