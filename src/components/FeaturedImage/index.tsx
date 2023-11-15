import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { IFeaturedImageProps } from "./types";

const FeaturedImage: FC<IFeaturedImageProps> = ({ image }) => {
  return (
    <Image
      source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
      style={styles.imageStyle}
      contentFit='cover'
    />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default FeaturedImage;
