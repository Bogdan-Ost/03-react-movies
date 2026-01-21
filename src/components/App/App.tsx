// import { useState } from "react";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import { fetchMovies } from "../../services/movieService";
import { useState } from "react";
import type { Movie } from "../../types/movie";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = (query: string) => {
    fetchMovies(query);
  };
  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} />
    </div>
  );
}
