import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../assets/images/contact.png";

const VisitedContacts = (props) => {
  return (
    <div className="flex items-center p-10 m-5 border border-blue-950 rounded-md bg-white shadow-md">
      <Link to={"/"} className="flex items-center justify-center flex-col">
        <img src={Contact} alt="contact icon" />
        <p>Arsalan Nury</p>
      </Link>
    </div>
  );
};

export default VisitedContacts;
