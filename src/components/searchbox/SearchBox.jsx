import React from "react";

const SearchBox = () => {
  return (
    <div className="flex items-center justify-center flex-col border-b-2 pb-10">
      <div className="md:w-4/12 w-full">
        <label
          for="contactnumber"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
        >
          Contact Number
        </label>
        <input
          type="text"
          id="contactnumber"
          class="bg-gray-50 border text-left w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
        />
      </div>
      <div className="md:w-4/12 w-full">
        <label
          for="contactname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
        >
          Contact Name
        </label>
        <input
          type="text"
          id="contactname"
          class="bg-gray-50 border text-left w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
        />
      </div>
      <button className="px-12 py-2 mt-5 bg-blue-950 text-white rounded-xl">
        search
      </button>
    </div>
  );
};

export default SearchBox;
