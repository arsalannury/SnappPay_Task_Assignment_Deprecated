import React from "react";
import Oops from "../../assets/images/oops.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-10">
      <img
        loading="lazy"
        src={Oops}
        alt="oops image :)"
        className="w-[200px] h-[250px]"
      />
      <p className="my-10">Oops! I think you are in the wrong page.</p>
      <Link
        className="border transition-all border-blue-950 outline-none px-20 py-5 bg-white text-blue-950 rounded-lg hover:shadow-bottomMd active:shadow-none"
        to={"/"}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
