import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

export interface IMovieListItem {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
}

export interface IMovieListItemProps {
  item: IMovieListItem;
}

export type DetailedItemScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "DetailedItemScreen"
>;
