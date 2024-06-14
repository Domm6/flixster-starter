import "./MovieCard.css"

function MovieCard (props) {
    return (
        <div className="movie-card" onClick={(e) => props.openModal(props.id)}>
            <img src={`https://image.tmdb.org/t/p/w500/${props.movieArt}`} alt="" className="movie-img"/>
            <div>
                <div className="movie-card-text">
                    <h3>{props.movieTitle}</h3>
                    <p>Rating: {props.rating}</p>
                    {/* <p>{props.overview}</p> */}
                </div>
            </div>
        </div>

    )
}

export default MovieCard