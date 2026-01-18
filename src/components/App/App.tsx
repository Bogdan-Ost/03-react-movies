// import { useState } from "react";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";

export default function App() {
  return (
    <div className={css.app}>
      <SearchBar />
      <MovieGrid />
    </div>
  );
}
