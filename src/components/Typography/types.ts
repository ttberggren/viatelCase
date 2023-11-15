import { FontSize } from "../../utils/Enums";
import { TextStyle } from "react-native";

export interface ITypographyProps {
  children: React.ReactNode;
  fontSize?: FontSize;
  onPress?: () => void;
  textColor?: string;
  style?: TextStyle;
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
}
