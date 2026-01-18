// import { useState } from "react";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import { fetchMovies } from "../../services/movieService";

export default function App() {
  const handleSearch = (query: string) => {
    fetchMovies(query);
  };
  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid />
    </div>
  );
}
