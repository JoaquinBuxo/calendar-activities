import React from "react";
import { Offer } from "../common/types";
import { useState, useEffect } from "react";
// functions api
import { fetchOffersByCompany } from "../api/fetchFunctions";
// helpers
import { groupBy } from "../common/helpers";
// components
import DayContainer from "./DayContainer";
import Spinner from "./Spinner";

const CalendarContainer = () => {
  const [offersDay, setOffersDay] = useState<[string, Offer[]][]>();
  const [spinner, setSpinner] = useState(false);

  const getOffers = async () => {
    const companyId = 6;
    const numOffersPage = 10;
    setSpinner(true);
    const offers = await fetchOffersByCompany(companyId, numOffersPage);
    setSpinner(false);
    return offers;
  };

  const getData = async () => {
    const offers = await getOffers();
    const offersByDay = groupBy(offers, (offer) =>
      offer.date_start.slice(0, 10)
    );
    setOffersDay(Object.entries(offersByDay));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="calendar">
      Calendar
      <DayContainer />
      {spinner ? (
        <Spinner></Spinner>
      ) : (
        <div>
          {offersDay?.map((day) => {
            return <p key={day[0]}>{day[0]}</p>;
          })}
        </div>
      )}
    </div>
  );
};;

export default CalendarContainer;
