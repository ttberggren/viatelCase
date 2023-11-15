import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  GetMoviesArgs,
  MovieResponse,
  SearchMoviesArgs,
  MovieDetails,
} from "./types";

// I'm aware that the api key is out in the open here.
// But I figure that this was the easy approach and if someone wishes to use it to search for movies, then I guess it's fine
export const apiKey = "243b90dc13b4b0d1873be91668787dc2";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<MovieResponse, GetMoviesArgs>({
      query: ({ apiKey, language, page, genre }) => {
        let endpoint = `movie/popular?api_key=${apiKey}&language=${language}&page=${page}`;
        if (genre) {
          endpoint += `&with_genres=${genre}`;
        }
        return endpoint;
      },
    }),
    searchMovies: builder.query<MovieResponse, SearchMoviesArgs>({
      query: ({ apiKey, query, language, page }) =>
        `search/movie?api_key=${apiKey}&query=${encodeURIComponent(
          query
        )}&language=${language}&page=${page}`,
    }),
    getMovieDetails: builder.query<MovieDetails, string>({
      query: (movieId) => `movie/${movieId}?api_key=${apiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useSearchMoviesQuery,
  useGetMovieDetailsQuery,
} = movieApi;
