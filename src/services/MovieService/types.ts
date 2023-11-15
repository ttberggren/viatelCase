export type GetMoviesArgs = {
  apiKey: string;
  language: string;
  page: number;
  genre?: string;
};

export type SearchMoviesArgs = {
  apiKey: string;
  query: string;
  language: string;
  page: number;
};

export type MovieResponse = {
  results: Movie[];
};

export type Movie = {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
};

type Genre = {
  id: number;
  name: string;
};

export type MovieDetails = {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  imdb_id: string;
  genres: Genre[];
};
