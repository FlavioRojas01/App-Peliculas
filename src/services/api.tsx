import type { Data } from "../interfaces/Movie";

const API_KEY = "22d8c17988d5590d8b2dc391f908e9ea";

const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = async (
  search: string = ""
): Promise<Data> => {

  const url = search
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}`
    : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

  const response = await fetch(url);

  const data: Data = await response.json();

  return data;
};