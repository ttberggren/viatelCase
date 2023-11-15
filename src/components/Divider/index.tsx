import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { IDividerProps } from "./types";
import { Color } from "../../utils/Enums";

const Divider: FC<IDividerProps> = ({
  color = Color.Divider,
  height,
  width,
  horizontal = false,
}) => {
  const dividerStyle: ViewStyle = {
    backgroundColor: color,
    height: horizontal ? StyleSheet.hairlineWidth : height ?? "100%",
    width: horizontal ? "100%" : width ?? StyleSheet.hairlineWidth,
  };

  return <View style={[styles.divider, dividerStyle]} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    alignSelf: "stretch",
    marginTop: 4,
    marginBottom: 4,
  },
});
