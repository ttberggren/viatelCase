import { IMovieListItem } from "../MovieListItem/types";

export interface IMovieListProps {
  data: {
    results: IMovieListItem[];
  };
}

export interface IMovieListItemProps {
  item: IMovieListItem;
}
