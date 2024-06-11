import "./MovieCard.css"

function MovieCard (props) {
    return (
        <div>
            <img src={props.moveArt} alt="" />
            <div>
                <h3>{props.movieTitle}</h3>
                <p>{props.rating}</p>
            </div>
        </div>

    )
}

export default MovieCard