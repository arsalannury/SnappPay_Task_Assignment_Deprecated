import React from "react";
import SearchIcon from "../../icons/SearchIcon";

const SearchBox = ({ getContactByQuery, loading }) => {
  return (
    <div className="flex items-center justify-center flex-col border-b-2 pb-10">
      <div className="md:w-4/12 w-full relative">
        <label
          htmlFor="contactname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
        >
          Contact Name Or Phone
        </label>
        <input
          onInput={(event) => getContactByQuery(event.target.value)}
          type="text"
          placeholder="Type something to search ..."
          id="contactname"
          className="indent-5 bg-gray-50 border text-left w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
        />
        <SearchIcon classN={"absolute top-[53px] left-1"} />
        {loading && <p>searching ...</p>}
      </div>
    </div>
  );
};

export default SearchBox;
