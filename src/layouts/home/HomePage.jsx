import React, { useEffect, useState } from "react";
import SearchBox from "../../components/searchbox/SearchBox";
import VisitedContacts from "../../components/visitedcontacts/VisitedContacts";
import ContactCart from "../../components/contactcart/ContactCart";
import { BaseUrl } from "../../baseUrl";
import Loading from "../../components/loading/Loading";

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllContacts = async () => {
    setLoading(true);
    try {
      const fetchResult = await BaseUrl.get("/passenger");
      setContacts(fetchResult.data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) return <Loading />;
      
    if (contacts && contacts.length > 0) {
      return contacts.map((contact) => (
        <ContactCart
          key={contact.id}
          id={contact.id}
          avatar={contact.avatar}
          city={contact.address}
          name={`${contact.first_name} ${contact.last_name}`}
          phone={contact.phone}
        />
      ));
    }
  };

  useEffect(() => {
    getAllContacts();
    return () => setContacts([]);
  }, []);

  return (
    <>
      <div className="md:w-8/12 w-full m-auto  p-3">
        <SearchBox />
        <p className="my-10 sm:text-left text-center">Last Visited Contacts</p>
        <div className="flex justify-around items-center sm:flex-row flex-col pb-10 border-b-2">
          <VisitedContacts />
        </div>
        <p className="my-10 sm:text-left text-center">Contacts</p>
        <div>{renderContent()}</div>
      </div>
    </>
  );
};

export default HomePage;
