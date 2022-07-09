import React from "react";
import Serach from "../public/assets/svg/search.svg";

const SearchInput = () => {
  return (
    <div className="flex items-center justify-center peer ">
      <input
        type="text "
        className="bg-yellow-200 appearance-none focus:outline-none focus:border-b-2 focus:border-[#000] transition duration-1000  "
        id="search"
      />
      <label htmlFor="search">
        <Serach className="w-4 peer peer-focus:border-[#000]" />
      </label>
    </div>
  );
};

export default SearchInput;
