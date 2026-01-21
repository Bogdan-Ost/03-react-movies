import type { Movie } from "../../types/movie";
import css from "./MovieGrid.module.css";

interface MovieGridProps {
  movies: Movie[];
}

export default function MovieGrid({ movies }: MovieGridProps) {
  const baseUrlImage = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <ul className={css.grid}>
        {movies.map((item) => (
          <li key={item.id}>
            <div className={css.card}>
              <img
                className={css.image}
                src={`${baseUrlImage}${item.poster_path}`}
                alt={item.title}
                loading="lazy"
              />
              <h2 className={css.title}>{item.titel}</h2>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
