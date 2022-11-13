import React from "react";
import DayContainer from "./DayContainer";
import { fetchOffersByCompany } from "../api/fetchFunctions";
import { Offer } from "../types";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./Spinner";

const CalendarContainer = () => {
  const [offers, setOffers] = useState<Offer[]>();
  const [spinner, setSpinner] = useState(false);

  const getOffers = async () => {
    const companyId = 6;
    const numOffersPage = 10;
    setSpinner(true);
    const offers = await fetchOffersByCompany(companyId, numOffersPage);
    setSpinner(false);
    setOffers(offers);
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div className="calendar">
      Calendar
      <DayContainer />
      {spinner ? (
        <Spinner></Spinner>
      ) : (
        offers?.map((offer) => {
          return <p key={offer.id}>{offer.id}</p>;
        })
      )}
    </div>
  );
};

export default CalendarContainer;
