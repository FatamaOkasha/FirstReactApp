import React from "react";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.poster !== "N/A"
              ? movie.poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.title}
        ></img>
      </div>
      <div>
        <span>{movie.type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;