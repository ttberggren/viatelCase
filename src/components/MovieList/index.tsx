import React, { FC } from "react";
import { FlashList } from "@shopify/flash-list";
import MovieListItem from "../MovieListItem";
import { IMovieListProps } from "./types";

// Only handles the rendering the list of movies
const MovieList: FC<IMovieListProps> = ({ data }) => {
  return (
    <FlashList
      estimatedItemSize={137}
      data={data.results}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MovieListItem item={item} />}
    />
  );
};

export default MovieList;
