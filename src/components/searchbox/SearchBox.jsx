import React from "react";

const SearchBox = () => {
  return (
    <div className="w-full flex items-center justify-around flex-col">
      <input type="text" name="phonenumber" id="phonenumber" />
      <input type="text" name="name" id="name" />
      <button>Search</button>
    </div>
  );
};

export default SearchBox;
