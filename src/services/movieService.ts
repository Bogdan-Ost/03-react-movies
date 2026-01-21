import axios from "axios";
import type { Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;
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
  try {
    const settings: Settings = {
      params: {
        query,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    };
    const { data } = await axios.get<Movie>(BASE_URL, settings);
    console.log(data);

    return data;
  } catch (error) {
    console.error("Помилка запиту до API:", error);
    // Викидаємо помилку далі, щоб компонент міг її обробити
    throw error;
  }
};
