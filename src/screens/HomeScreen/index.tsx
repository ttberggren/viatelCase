import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieListContainer from "../../containers/MovieListContainer";
import SearchBarContainer from "../../containers/SearchBarContainer";
import { Color } from "../../utils/Enums";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark' />
      <SearchBarContainer onSearch={handleSearch} />
      <MovieListContainer searchQuery={searchQuery} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Gray,
  },
});
