import React from "react";

const DetailData = (props) => {
  return (
    <>
      <div className="md:w-6/12 w-full m-auto">
        <label
          htmlFor={props.label}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
        >
          {props.label}
        </label>
        <input
          disabled
          type="text"
          id={props.label}
          value={props.value ?? "-----"}
          className="cursor-not-allowed bg-gray-50 border text-left w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
        />
      </div>
    </>
  );
};

export default DetailData;
