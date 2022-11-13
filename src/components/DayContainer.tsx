import React from "react";
import { Offer } from "../common/types";

type Props = {
  day: string;
  offers: Offer[];
};

const DayContainer = ({ day, offers }: Props) => {
  return (
    <div className="day">
      <div>{day}</div>
      {offers.map((item) => {
        return <div key={item.id}>{item.id}</div>;
      })}
    </div>
  );
};

export default DayContainer;
