import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../../baseUrl";
import DetailData from "../../components/detaildata/DetailData";
import Loading from "../../components/loading/Loading";
import Phone from "../../assets/images/phone.png";
import Telegram from "../../assets/images/telegram.png";

const DetailPage = (props) => {
  const routerParams = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(false);

  const getContact = async () => {
    setLoading(true);
    try {
      const fetchResult = await BaseUrl.get(
        `/passenger/${
          props.passIdFromTest ? props.passIdFromTest : routerParams.id
        }`
      );

      setContact(fetchResult.data);
      setLoading(false);
      checkStorageAndUpdate(fetchResult.data);
    } catch (error) {
      setLoading(false);
    }
  };

  const checkStorageAndUpdate = (contactData) => {
    if (localStorage.getItem("last_visited")) {
      const lastVisitedList = JSON.parse(localStorage.getItem("last_visited"));

      const findDuplicatedRecord = lastVisitedList.find(
        (record) => record.id === Number(routerParams.id)
      );

      if (!findDuplicatedRecord) {
        lastVisitedList.length >= 4 && lastVisitedList.shift();

        lastVisitedList.push({
          id: contactData.id,
          name: `${contactData.first_name} ${contactData.last_name}`,
        });

        localStorage.setItem("last_visited", JSON.stringify(lastVisitedList));
      }
    } else {
      const list = [];

      list.push({
        id: contactData.id,
        name: `${contactData.first_name} ${contactData.last_name}`,
      });

      localStorage.setItem("last_visited", JSON.stringify(list));
    }
  };

  useEffect(() => {
    getContact();
    return () => setContact(null);
  }, []);

  return (
    <>
      {contact ? (
        <div
          data-testid="contact-detail"
          className="md:w-6/12 w-full m-auto p-3"
        >
          <div className="border-b-2 pb-5">
            <img
              data-testid="contactImage"
              src={contact.avatar}
              className="m-auto w-[200px] rounded-full border border-blue-950"
            />
            <p data-testid="contactName" className="text-center mt-5">
              {contact.first_name} {contact.last_name}
            </p>
            <p
              data-testid="contactCreatedAt"
              className="mt-4 text-center bg-blue-900 text-blue-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded m-auto"
            >
              createdAt: {new Date(contact.createdAt).toLocaleString()}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span
              data-testid="contactPhone"
              className="flex items-center justify-center"
            >
              <img
                src={Phone}
                loading="lazy"
                className="w-[30px] mr-2"
                alt="phone image"
              />
              +{contact.phone}
            </span>
            <span
              data-testid="contactTelegram"
              className="flex items-center justify-center"
            >
              <img
                src={Telegram}
                loading="lazy"
                className="w-[30px] mr-2"
                alt="telegram image"
              />
              {contact.telegram}
            </span>
          </div>
          <div className="mt-10">
            <DetailData value={contact.email} label={"Email"} />
            <DetailData value={contact.gender} label={"Gender"} />
            <DetailData value={contact.company} label={"Company"} />
            <DetailData value={contact.address} label={"Address"} />
          </div>
        </div>
      ) : (
        <Loading classN={"h-[100vh]"} />
      )}
    </>
  );
};

export default DetailPage;
