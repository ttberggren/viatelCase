import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IMovieListItemProps } from "./types";
import { Image } from "expo-image";
import Typography from "../Typography";
import { Color, FontSize } from "../../utils/Enums";
import { useNavigation } from "@react-navigation/native";
import { DetailedItemScreenNavigationProp } from "./types";

const MovieListItem: FC<IMovieListItemProps> = ({ item }) => {
  const navigation = useNavigation<DetailedItemScreenNavigationProp>();

  const onPress = () => {
    navigation.navigate("DetailedItemScreen", { id: item.id });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
        contentFit='cover'
      />
      <View style={styles.textContainer}>
        <Typography fontSize={FontSize.Large} style={styles.title}>
          {item.title}
        </Typography>
        <View style={styles.metadataContainer}>
          <Typography fontSize={FontSize.Small}>
            ⭐ {item.vote_average}
          </Typography>
          <Typography fontSize={FontSize.Small}>{item.release_date}</Typography>
        </View>
        <Typography
          fontSize={FontSize.Small}
          style={styles.overview}
          numberOfLines={3}
          ellipsizeMode='tail'
        >
          {item.overview}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default MovieListItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
    shadowColor: Color.Black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 8,
  },
  poster: {
    width: 100,
    height: undefined,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    maxHeight: 150,
    padding: 10,
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
  },
  metadataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  overview: {
    color: Color.Gray,
    flexWrap: "wrap",
    marginTop: 4,
    marginRight: 10,
  },
});
