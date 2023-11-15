import React, { FC, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Linking,
} from "react-native";
import { useGetMovieDetailsQuery } from "../../services/MovieService";
import { IMovieDetailContainerProps } from "./types";
import FeaturedImage from "../../components/FeaturedImage";
import { Color, FontSize } from "../../utils/Enums";
import Typography from "../../components/Typography";
import { useNavigation } from "@react-navigation/native";
import Divider from "../../components/Divider";

const screenWidth = Dimensions.get("window").width;
const imageWidth = screenWidth * 0.6;
const imageHeight = imageWidth * (6 / 4);

const MovieDetailContainer: FC<IMovieDetailContainerProps> = ({ id }) => {
  const navigation = useNavigation();
  const {
    data: movieDetails,
    isLoading,
    isError,
  } = useGetMovieDetailsQuery(id.toString());

  const imdb_id = movieDetails?.imdb_id;

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  // Set the header title to the movie title
  useEffect(() => {
    if (movieDetails?.title) {
      navigation.setOptions({ title: movieDetails.title });
    } else {
      navigation.setOptions({ title: "" });
    }
  }, [movieDetails, navigation]);
  return (
    <ScrollView style={styles.container}>
      {isLoading && <ActivityIndicator size='large' color={Color.Black} />}
      {isError && (
        <Typography fontSize={FontSize.Large}>Something went wrong</Typography>
      )}
      {movieDetails && (
        <>
          <View style={styles.detailView}>
            <View style={styles.imageContainer}>
              <FeaturedImage image={movieDetails.poster_path} />
            </View>
            <View style={styles.textContainer}>
              <Typography
                style={{ fontWeight: "bold", marginBottom: 14 }}
                fontSize={FontSize.Large}
              >
                {movieDetails.title}
              </Typography>

              <Typography
                style={{ fontStyle: "italic", marginBottom: 14 }}
                fontSize={FontSize.Large}
              >
                {movieDetails.release_date}
              </Typography>
              <Typography fontSize={FontSize.Large}>
                ⭐ {movieDetails.vote_average}
              </Typography>
              <Typography
                textColor={Color.Link}
                style={{ marginTop: 14 }}
                onPress={() =>
                  handleLinkPress(`https://imdb.com/title/${imdb_id}`)
                }
                fontSize={FontSize.Medium}
              >
                IMDB
              </Typography>
            </View>
          </View>
          <View style={{ marginTop: 14, margin: 16 }}>
            <View style={styles.genreContainer}>
              {movieDetails.genres.map((genre, index) => (
                <Typography key={genre.id}>
                  {genre.name}
                  {index < movieDetails.genres.length - 1 ? ", " : ""}
                </Typography>
              ))}
            </View>
            <Divider horizontal={true} color={Color.Black} />
            <Typography fontSize={FontSize.Large}>
              {movieDetails.overview}
            </Typography>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default MovieDetailContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailView: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imageContainer: {
    width: imageWidth,
    height: imageHeight,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    margin: 16,
  },
  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
