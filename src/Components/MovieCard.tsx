import { FaHeart } from "react-icons/fa";

import type { Movies } from "../interfaces/Movie";

import { useFavorites } from "../context/FavoritesContext";

const IMAGEN_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }: { movie: Movies }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(movie.id);

  return (
    <div
      className="
      bg-white 
      rounded-2xl 
      shadow-md 
      overflow-hidden 
      hover:scale-105 
      transition 
      duration-300
      "
    >
      {/* Imagen */}
      <div className="relative">
        <img src={`${IMAGEN_URL}${movie.poster_path}`} alt={movie.title} />

        {/* BOTÓN FAVORITO */}
        <button
          onClick={() => toggleFavorite(movie)}
          className="
            absolute
            top-2
            right-2
            bg-black/60
            rounded-full
            w-10
            h-10
            flex
            items-center
            justify-center
            cursor-pointer
          "
        >
          <FaHeart className={favorite ? "text-red-500" : "text-white"} />
        </button>
      </div>

      {/* INFO */}
      <div className="p-3">
        <h2 className="font-bold text-lg text-black">{movie.title}</h2>

        <p className="text-gray-600">{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
