import "./MovieCard.css";

const DEFAULT_IMAGE = "https://st4.depositphotos.com/21557188/23286/v/450/depositphotos_232860038-stock-illustration-movie-strip-simple-silhouette-black.jpg";

function MovieCard(props) {
    const posterUrl = props.movieArt ? `https://image.tmdb.org/t/p/w500/${props.movieArt}` : DEFAULT_IMAGE;

    return (
        <div className="movie-card" onClick={(e) => props.openModal(props.id)}>
            <img src={posterUrl} alt={`${props.movieTitle} poster`} className="movie-img" />
            <div>
                <div className="movie-card-text">
                    <h3>{props.movieTitle}</h3>
                    <p>Rating: {props.rating}</p>
                    {/* <p>{props.overview}</p> */}
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
