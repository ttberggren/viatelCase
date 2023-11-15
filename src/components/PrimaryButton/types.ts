import { ViewStyle, TextStyle } from "react-native";

export interface IPrimaryButtonProps {
  title: string;
  onPress: () => void;
  fontSize?: number;
  loading?: boolean;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
}
