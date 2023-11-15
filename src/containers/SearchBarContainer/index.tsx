import React, { FC, useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import { ISearchBarContainerProps } from "./types";

const SearchBarContainer: FC<ISearchBarContainerProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery, onSearch]);

  return (
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
  );
};

export default SearchBarContainer;
