import React from "react";
import DayContainer from "./DayContainer";
import { fetchOffersByCompany } from "../api/fetchFunctions";
import { Offer } from "../types";
import { useState } from "react";
import { useEffect } from "react";

const CalendarContainer = () => {
  const [offers, setOffers] = useState<Offer[]>();

  const getOffers = async () => {
    const companyId = 6;
    const numOffersPage = 10;
    const offers = await fetchOffersByCompany(companyId, numOffersPage);
    setOffers(offers);
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div className="calendar">
      Calendar
      <DayContainer />
      {offers?.map((offer) => {
        return <p>{offer.id}</p>;
      })}
    </div>
  );
};

export default CalendarContainer;
