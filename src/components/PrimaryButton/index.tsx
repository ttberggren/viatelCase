import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import { IPrimaryButtonProps } from "./types";
import { Color } from "../../utils/Enums";

const PrimaryButton: FC<IPrimaryButtonProps> = ({
  title,
  onPress,
  fontSize,
  loading,
  style,
  textStyle,
}) => {
  const combinedStyles: ViewStyle = StyleSheet.flatten([styles.button, style]);

  const textStyles: TextStyle = StyleSheet.flatten([
    styles.text,
    textStyle,
    { fontSize },
  ]);
  return (
    <TouchableOpacity
      style={combinedStyles}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size='small' color={Color.Black} />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.Primary,
  },
  text: {
    color: Color.Black,
    textAlign: "center",
  },
});
