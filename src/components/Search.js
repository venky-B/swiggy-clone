import React from "react";
import { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("hello");

  return (
    <div className="flex gap-2 ">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        className=" border-solid border border-black"
      />
      <button>Search</button>
    </div>
  );
};

export default Search;
