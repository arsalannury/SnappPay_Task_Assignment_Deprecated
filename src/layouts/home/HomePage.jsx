import React, { useEffect, useState } from "react";
import SearchBox from "../../components/searchbox/SearchBox";
import VisitedContacts from "../../components/visitedcontacts/VisitedContacts";
import ContactCart from "../../components/contactcart/ContactCart";
import { BaseUrl } from "../../baseUrl";
import Loading from "../../components/loading/Loading";
import Oops from "../../assets/images/oops.png";

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getContactByQuery = async (inputValue) => {
    const regex = new RegExp(/[0-9]/);
    const test = regex.test(inputValue);
    setLoading(true);
    try {
      const fetchResultQuery = await BaseUrl.get(
        `/passenger/?where={${
          test ? '"phone"' : '"first_name"'
        }:{"contains":"${inputValue}"}}&sort=createdAt DESC&limit=30`
      );
      setContacts(fetchResultQuery.data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const debounceQuery = (mainFunction, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        mainFunction(...args);
      }, delay);
    };
  };

  const debouncedSearchQuery = debounceQuery(getContactByQuery, 1500);

  const getAllContacts = async () => {
    try {
      setLoading(true);
      const fetchResult = await BaseUrl.get("/passenger");
      setContacts(fetchResult.data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const renderContacts = () => {
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

  const renderLastVisited = () => {
    const lastVisitedList =
      localStorage.getItem("last_visited") &&
      JSON.parse(localStorage.getItem("last_visited"));

    if (lastVisitedList) {
      return lastVisitedList.map((visit) => (
        <VisitedContacts key={visit.id} name={visit.name} path={visit.id} />
      ));
    }

    return (
      <div>
        <img
          src={Oops}
          loading={"lazy"}
          alt="oops image"
          className="w-[150px] m-auto"
        />
        <p>Oops! The Last Visited List Is Empty</p>
      </div>
    );
  };

  useEffect(() => {
    getAllContacts();
    return () => setContacts([]);
  }, []);

  return (
    <>
      <div className="md:w-8/12 w-full m-auto p-3">
        <p className="my-10 sm:text-left text-center">Search Contacts</p>
        <SearchBox loading={loading} getContactByQuery={debouncedSearchQuery} />
        <p className="my-10 sm:text-left text-center">Last Visited Contacts</p>
        <div className="flex justify-around items-center sm:flex-row flex-col pb-10 border-b-2">
          {renderLastVisited()}
        </div>
        <p className="my-10 sm:text-left text-center">Contacts</p>
        <div>{renderContacts()}</div>
      </div>
    </>
  );
};

export default HomePage;
