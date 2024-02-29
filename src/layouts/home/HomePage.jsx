import React from "react";
import SearchBox from "../../components/searchbox/SearchBox";
import VisitedContacts from "../../components/visitedcontacts/VisitedContacts";
import ContactCart from "../../components/contactcart/ContactCart";

const HomePage = () => {
  return (
    <>
      <div className="md:w-8/12 w-full m-auto  p-3">
        <SearchBox />
        <p className="my-10 sm:text-left text-center">Last Visited Contacts</p>
        <div className="flex justify-around items-center sm:flex-row flex-col pb-10 border-b-2">
          <VisitedContacts />
        </div>
        <p className="my-10 sm:text-left text-center">Contacts</p>
        <div>
          <ContactCart />
        </div>
      </div>
    </>
  );
};

export default HomePage;
