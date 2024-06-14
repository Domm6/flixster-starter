import "./Modal.css"


function Modal (props) {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{props.movieTitle}</h3>                
                </div>
                <img src={`https://image.tmdb.org/t/p/w500/${props.movieArt}`} alt={`${props.movieTitle} poster`} className="movie-img"/>
                <div className="modal-info">
                    <div className="modal-text">
                        <p><span className="bold-text">Release Date:</span> {props.releaseDate}</p>
                        <p><span className="bold-text">Overview:</span> {props.overview}</p>
                        <p><span className="bold-text">Genres:</span> {props.genre?.map(genre => genre.name).join(', ')}</p>
                        <p><span className="bold-text">Run Time:</span> {props.runtime} minutes</p>
                    </div>
                    <div className="modal-trailer">
                        <iframe src={props.trailerUrl} frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>            
                <button className="modal-button" onClick={props.onClose}>Close</button>
            </div>
        </div>

    )
}

export default Modal
