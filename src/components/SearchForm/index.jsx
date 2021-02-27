import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Store } from "../../context";
import { SearchButton, StyledForm, SearchIcon } from "./styles";

const SearchForm = () => {
  const context = useContext(Store);
  const { searchValue, setSearchValue } = context;

  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue.trim()) {
      history.push(`/products?search=${searchValue}`);
    } else {
      setSearchValue("");
    }
  };

  return (
    <StyledForm>
      <input
        type="text"
        placeholder="Buscar...."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SearchButton onClick={(e) => handleSearch(e)}>
        <SearchIcon />
      </SearchButton>
    </StyledForm>
  );
};

export default SearchForm;
