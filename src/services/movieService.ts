import axios from "axios";
import type { Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

interface Settings {
  params: {
    query: string;
    page?: number;
  };
  headers: {
    Authorization: string;
  };
}

export const fetchMovies = async (query: string) => {
  const settings: Settings = {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const { data } = await axios.get<Movie>(BASE_URL, settings);
  return data;
};
