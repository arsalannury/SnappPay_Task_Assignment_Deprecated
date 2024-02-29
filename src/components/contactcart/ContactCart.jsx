import React from "react";
import { Link } from "react-router-dom";

const ContactCart = ({ avatar, name, phone, city, id }) => {
  return (
    <>
      <div className="flow-root border-b-2">
        <Link to={`/detailPage/${id}`}>
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={avatar}
                    alt="avatar image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    address: {city ?? "----"}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-blue-950 dark:text-white">
                  +{phone}
                </div>
              </div>
            </li>
          </ul>
        </Link>
      </div>
    </>
  );
};

export default ContactCart;
