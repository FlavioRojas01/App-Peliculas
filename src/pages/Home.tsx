import { useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import MovieCard from "../Components/MovieCard";

import { getMovies } from "../services/api";

import type { Movies } from "../interfaces/Movie";

function Home() {

  const [movies, setMovies] = useState<Movies[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const loadMovies = async () => {

      try {

        const peliculas = await getMovies(search);

        setMovies(peliculas.results);

      } catch (error) {

        console.log(error);

      }
    };

    loadMovies();

  }, [search]);

  return (

    <div className="min-h-screen bg-black p-5">

      {/* NAVBAR */}
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      {/* GRID PELICULAS */}
      <div
        className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-5
        mt-5
        "
      >

        {movies.map((movie: Movies) => {

          return (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          );

        })}

      </div>

    </div>

  );
}

export default Home;