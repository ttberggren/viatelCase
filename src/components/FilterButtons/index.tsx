import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import PrimaryButton from "../PrimaryButton";
import { FilterButtonsProps } from "./types";
import { Color } from "../../utils/Enums";
import Divider from "../Divider";

const FilterButtons: FC<FilterButtonsProps> = ({
  onFilterChange,
  activeFilter,
}) => {
  return (
    <View style={styles.container}>
      <PrimaryButton
        title='Top vote average'
        onPress={() => onFilterChange("vote")}
        fontSize={16}
        loading={false}
        style={
          activeFilter === "vote" ? styles.activeButton : styles.inactiveButton
        }
        textStyle={activeFilter === "vote" ? styles.buttonTextActive : {}}
      />
      <Divider horizontal={false} />
      <PrimaryButton
        title='Latest release'
        onPress={() => onFilterChange("release")}
        fontSize={16}
        loading={false}
        style={
          activeFilter === "release"
            ? styles.activeButton
            : styles.inactiveButton
        }
        textStyle={activeFilter === "release" ? styles.buttonTextActive : {}}
      />
    </View>
  );
};

export default FilterButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: Color.White,
    marginVertical: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 0,
  },

  activeButton: {
    backgroundColor: Color.Primary,
    flex: 1,
  },
  inactiveButton: {
    backgroundColor: "transparent",
    flex: 1,
  },
  buttonTextActive: {
    color: Color.White,
  },
});
