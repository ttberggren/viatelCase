import React, { FC } from "react";
import { Text, TouchableOpacity, TextStyle } from "react-native";
import { ITypographyProps } from "./types";

const Typography: FC<ITypographyProps> = ({
  children,
  fontSize,
  textColor,
  onPress,
  style,
  numberOfLines,
  ellipsizeMode,
}) => {
  const textStyles: TextStyle = {
    fontSize,
    color: textColor,
    ...style,
  };

  const textComponent = (
    <Text
      style={textStyles}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Text>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress}>{textComponent}</TouchableOpacity>
  ) : (
    textComponent
  );
};

export default Typography;
