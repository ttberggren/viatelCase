import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailedItemScreen from "../screens/DetailedItemScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='DetailedItemScreen' component={DetailedItemScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
