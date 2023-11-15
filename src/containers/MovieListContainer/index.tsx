import React, { FC, useState, useMemo } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { apiKey, useSearchMoviesQuery } from "../../services/MovieService";
import { MovieListContainerProps } from "./types";
import MovieList from "../../components/MovieList";
import Typography from "../../components/Typography";
import { FontSize, Color } from "../../utils/Enums";
import FilterButtons from "../../components/FilterButtons";

const MovieListContainer: FC<MovieListContainerProps> = ({ searchQuery }) => {
  const { data, error, isLoading } = useSearchMoviesQuery(
    {
      apiKey: apiKey,
      query: searchQuery,
      language: "en-US",
      page: 1,
    },
    {
      skip: searchQuery.length < 3 || searchQuery.length === 0,
    }
  );

  const [sortMethod, setSortMethod] = useState<"vote" | "release">("release");

  // Memoized sorted data
  const sortedData = useMemo(() => {
    if (!data?.results) return [];

    switch (sortMethod) {
      case "vote":
        // Sort by vote average
        return [...data.results].sort(
          (a, b) => b.vote_average - a.vote_average
        );
      case "release":
      default:
        // Sort by release date
        return [...data.results].sort(
          (a, b) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        );
    }
  }, [data, sortMethod]);

  const handleFilterChange = (filter: "vote" | "release") => {
    setSortMethod(filter);
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size='large' />}
      {error && (
        <Typography textColor={Color.Error} fontSize={FontSize.Medium}>
          Error: {JSON.stringify(error)}
        </Typography>
      )}
      {!isLoading && !error && (
        <Typography style={styles.resultText} fontSize={FontSize.Medium}>
          {data
            ? `Showing results for`
            : "Enter a search query above to get started!"}

          {data && (
            <Typography style={{ fontWeight: "bold" }}>
              {" "}
              {searchQuery}
            </Typography>
          )}
        </Typography>
      )}
      {data && (
        <FilterButtons
          onFilterChange={handleFilterChange}
          activeFilter={sortMethod}
        />
      )}
      {data ? <MovieList data={{ results: sortedData }} /> : null}
    </View>
  );
};

export default MovieListContainer;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-between" },
  resultText: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  filterButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
