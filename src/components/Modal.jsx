import "./Modal.css"

function Modal (props) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>{props.movieTitle}</h3>
                <img src={props.movieArt} alt="" />
                <div className="modal-text">
                    <p><span className="bold-text">Release Date:</span> {props.releaseDate}</p>
                    <p><span className="bold-text">Overview:</span> {props.overview}</p>
                    <p><span className="bold-text">Genres:</span> {props.genre}</p>
                </div>
                <button className="modal-button">Close</button>
            </div>
        </div>
    )
}

export default Modal
