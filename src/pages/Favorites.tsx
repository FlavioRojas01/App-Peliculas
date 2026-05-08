import { Link } from "react-router-dom";

import MovieCard from "../Components/MovieCard";

import { useFavorites } from "../context/FavoritesContext";

function Favorites() {

  const { favorites } = useFavorites();

  return (

    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-8">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

        <div>

          <h1
            className="
            text-4xl
            md:text-5xl
            font-extrabold
            text-red-500
            tracking-tight
            "
          >
            Mis Favoritos ❤️
          </h1>

          <p className="text-gray-400 mt-2 text-lg">
            Tus películas favoritas guardadas.
          </p>

        </div>

        <Link
          to="/"
          className="
          bg-red-600
          hover:bg-red-700
          transition
          px-6
          py-3
          rounded-xl
          font-semibold
          shadow-lg
          w-fit
          "
        >
          ← Volver al Inicio
        </Link>

      </div>

      {/* INFO CARDS */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5
        mb-10
        "
      >

        <div
          className="
          bg-gray-900/80
          border
          border-gray-800
          rounded-2xl
          p-6
          shadow-lg
          backdrop-blur-sm
          "
        >
          <h2 className="text-gray-400 text-sm uppercase tracking-wide">
            Total Favoritos
          </h2>

          <p className="text-4xl font-bold text-red-500 mt-2">
            {favorites.length}
          </p>
        </div>

        <div
          className="
          bg-gray-900/80
          border
          border-gray-800
          rounded-2xl
          p-6
          shadow-lg
          backdrop-blur-sm
          "
        >
          <h2 className="text-gray-400 text-sm uppercase tracking-wide">
            Estado
          </h2>

          <p className="text-2xl font-semibold text-green-400 mt-2">
            Colección Activa
          </p>
        </div>

        <div
          className="
          bg-gray-900/80
          border
          border-gray-800
          rounded-2xl
          p-6
          shadow-lg
          backdrop-blur-sm
          "
        >
          <h2 className="text-gray-400 text-sm uppercase tracking-wide">
            Experiencia
          </h2>

          <p className="text-2xl font-semibold text-pink-400 mt-2">
            Cine Premium 🍿
          </p>
        </div>

      </div>

      {/* SIN FAVORITOS */}
      {favorites.length === 0 ? (

        <div
          className="
          flex
          flex-col
          items-center
          justify-center
          text-center
          py-24
          bg-gray-900/60
          rounded-3xl
          border
          border-gray-800
          shadow-2xl
          "
        >

          <div className="text-7xl mb-6">
            💔
          </div>

          <h2 className="text-3xl font-bold mb-3">
            No tienes favoritos todavía
          </h2>

          <p className="text-gray-400 max-w-md mb-8">
            Guarda tus películas favoritas presionando el corazón ❤️
          </p>

          <Link
            to="/"
            className="
            bg-red-600
            hover:bg-red-700
            transition
            px-6
            py-3
            rounded-xl
            font-semibold
            shadow-lg
            "
          >
            Explorar Películas
          </Link>

        </div>

      ) : (

        <div
          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-6
          "
        >

          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}

        </div>

      )}

    </div>

  );
}

export default Favorites;