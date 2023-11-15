import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type DetailedItemScreenRouteProp = RouteProp<
  RootStackParamList,
  "DetailedItemScreen"
>;
export type DetailedItemScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "DetailedItemScreen"
>;

export interface IDetailedItemScreenProps {
  route: DetailedItemScreenRouteProp;
  navigation: DetailedItemScreenNavigationProp;
}
