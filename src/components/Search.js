import React from "react";

const Search = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="search"
        className="form-control search-bar py-2 my-2"
        placeholder="Search for any recipe..."
        aria-label="Search"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Search;
