import React from "react";

const SearchBar = props => {
  return (
    <div className="filter">
      <h3>Search</h3>
      <input
      className="form-control"
        id="search-input"
        value={props.searchTerm}
        onChange={props.onSearchInputChangeHandler}
        placeholder="Search to find music"
      />
    </div>

  );
};

export default SearchBar;