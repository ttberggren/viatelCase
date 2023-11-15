import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IDetailedItemScreenProps } from "./types";
import MovieDetailContainer from "../../containers/MovieDetailContainer";
import { Color } from "../../utils/Enums";

const DetailedItemScreen: FC<IDetailedItemScreenProps> = ({ route }) => {
  const { id } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <MovieDetailContainer id={id} />
    </SafeAreaView>
  );
};

export default DetailedItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Gray,
  },
});
