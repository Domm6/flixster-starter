import "./MovieCard.css"

function MovieCard (props) {
    return (
        <div className="movie-card">
            <img src={props.movieArt} alt="" className="movie-img"/>
            <div>
                <div className="movie-card-text">
                    <h3>{props.movieTitle}</h3>
                    <p>Rating: {props.rating}</p>
                </div>
            </div>
        </div>

    )
}

export default MovieCard