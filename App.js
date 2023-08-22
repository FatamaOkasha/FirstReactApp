import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

import MovieCard from "./MovieCard";

//50b100a4

const API_URL = "http://www.omdbapi.com?apiKey=50b100a4";
// const movie1 = {
//   Title: "Amazing Spiderman Syndrome",
//   Year: "2012",
//   imdbID: "tt2586634",
//   type: "movie",
//   poster: "N/A",
// };
const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="seacrh">
        <input
          placeholder="Search for movies "
          value="Superman"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
