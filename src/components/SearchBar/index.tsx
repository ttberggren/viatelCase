import React, { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Color } from "../../utils/Enums";
import { ISearchBarProps } from "./types";

const SearchBar: FC<ISearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.searchBarView}>
      <TextInput
        style={styles.textInputStyle}
        placeholder='Search'
        placeholderTextColor={Color.Black}
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoComplete='off'
        autoCorrect={false}
        autoCapitalize='sentences'
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarView: {
    marginTop: "5%",
    marginBottom: "10%",
    marginHorizontal: "5%",
  },
  textInputStyle: {
    height: 35,
    borderColor: Color.Gray,
    backgroundColor: Color.White,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
});
