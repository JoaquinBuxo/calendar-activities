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
import Paginator from "./Paginator";
// bootstrap components
import { ListGroup, Container } from "react-bootstrap";

const CalendarContainer = () => {
  const [offersDay, setOffersDay] = useState<[string, Offer[]][]>();
  const [spinner, setSpinner] = useState(false);
  const [numPage, setNumPage] = useState(1);

  const getOffers = async (numPage = 1) => {
    const companyId = 6;
    const numOffersPage = 10;
    setSpinner(true);
    const offers = await fetchOffersByCompany(
      companyId,
      numOffersPage,
      numPage
    );
    setSpinner(false);
    return offers;
  };

  const handleNextPage = () => {
    setNumPage(numPage + 1);
  };

  const handlePrevPage = () => {
    setNumPage(numPage - 1);
  };

  const getData = async () => {
    const offers = await getOffers(numPage);
    const offersByDay = groupBy(offers, (offer) =>
      offer.date_start.slice(0, 10)
    );
    setOffersDay(Object.entries(offersByDay));
  };

  useEffect(() => {
    getData();
  }, [numPage]);

  return (
    <div className="calendar">
      <Container className="d-flex justify-content-center">
        {spinner ? (
          <Spinner></Spinner>
        ) : (
          <div className="d-flex flex-column col-md-12">
            <Paginator
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              numPage={numPage}
            />
            <ListGroup>
              {offersDay?.map((dayInfo) => {
                return (
                  <DayContainer
                    key={dayInfo[0]}
                    day={dayInfo[0]}
                    offers={dayInfo[1]}
                  />
                );
              })}
            </ListGroup>
          </div>
        )}
      </Container>
    </div>
  );
};;

export default CalendarContainer;
