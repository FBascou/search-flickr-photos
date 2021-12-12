import React, { useState } from "react";

const SearchInput = ({ addSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState("");

  function onInputChange(e) {
    setSearchQuery(e.target.value);
  }

  function onInputSubmit(e) {
    e.preventDefault();
    addSearchQuery(searchQuery);
    console.log(searchQuery);
  }

  return (
    <div>
      <form onSubmit={onInputSubmit}>
        <label htmlFor="searchQuery">Search</label>
        <input
          type="text"
          placeholder="Try 'dog' or 'fruits'"
          onChange={onInputChange}
          name="searchQuery"
          value={searchQuery}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchInput;
