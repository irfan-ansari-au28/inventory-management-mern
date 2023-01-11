import React from "react";
import { GrSearch } from "react-icons/gr";

const Search = () => {
  const [search, setSearch] = "";
  return (
    <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
      <button className="outline-none focus:outline-none">
        <GrSearch />
      </button>
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
      />
    </div>
  );
};

export default Search;
