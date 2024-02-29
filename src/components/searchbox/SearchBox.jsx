import React from "react";

const SearchBox = () => {
  return (
    <div className="flex items-center justify-center flex-col border-b-2 pb-10">
      <div className="md:w-4/12 w-full">
        <label
          htmlFor="contactnumber"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
        >
          Contact Number
        </label>
        <input
          type="text"
          id="contactnumber"
          className="bg-gray-50 border text-left w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
        />
      </div>
      <div className="md:w-4/12 w-full">
        <label
          htmlFor="contactname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
        >
          Contact Name
        </label>
        <input
          type="text"
          id="contactname"
          className="bg-gray-50 border text-left w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
        />
      </div>
      <button
        className="px-12 py-2 mt-5 bg-blue-950 text-white rounded-xl 
        transition-all hover:bg-white hover:text-blue-950 border
       border-blue-950 hover:shadow-bottomSm active:shadow-bottomXs"
      >
        search
      </button>
    </div>
  );
};

export default SearchBox;
