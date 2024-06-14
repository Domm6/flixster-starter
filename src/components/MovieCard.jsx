import React, { useState } from 'react';
import "./MovieCard.css";

const DEFAULT_IMAGE = "https://st4.depositphotos.com/21557188/23286/v/450/depositphotos_232860038-stock-illustration-movie-strip-simple-silhouette-black.jpg";
const UNCHECKED_IMAGE = "https://cdn.iconscout.com/icon/free/png-256/free-checkbox-2652909-2202826.png";
const CHECKED_IMAGE = "https://cdn.icon-icons.com/icons2/3251/PNG/512/checkbox_checked_regular_icon_203781.png";
const UNLIKED_IMAGE = "https://www.svgrepo.com/show/391884/heart-empty.svg";
const LIKED_IMAGE = "https://icons.iconarchive.com/icons/designbolts/free-valentine-heart/256/Heart-icon.png";

function MovieCard(props) {
    const [isLiked, setIsLiked] = useState(false);
    const [isWatched, setIsWatched] = useState(false);

    const posterUrl = props.movieArt ? `https://image.tmdb.org/t/p/w500/${props.movieArt}` : DEFAULT_IMAGE;

    const handleLikeToggle = (e) => {
        e.stopPropagation();
        setIsLiked(!isLiked);
    };

    const handleWatchedToggle = (e) => {
        e.stopPropagation();
        setIsWatched(!isWatched);
    };

    return (
        <div className="movie-card" onClick={() => props.openModal(props.id)}>
            <img src={posterUrl} alt={`${props.movieTitle} poster`} className="movie-img" />
                <div className="movie-card-text">
                    <h3>{props.movieTitle}</h3>
                    <div className="text-bottom">
                        <img 
                            src={isLiked ? LIKED_IMAGE : UNLIKED_IMAGE} 
                            alt="like" 
                            onClick={handleLikeToggle}
                            className="icon"
                        />
                        <p>Rating: {props.rating}</p>
                        <img 
                            src={isWatched ? CHECKED_IMAGE : UNCHECKED_IMAGE} 
                            alt="watched" 
                            onClick={handleWatchedToggle}
                            className="icon"
                        />
                    </div>
                </div>
        </div>
    );
}

export default MovieCard;
