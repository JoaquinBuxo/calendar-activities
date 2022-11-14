import React, { useEffect } from "react";
import { useState } from "react";
import { getActivity } from "../api/fetchFunctions";
import { Offer, Activity } from "../common/types";

type Props = {
  day: string;
  offers: Offer[];
};

const DayContainer = ({ day, offers }: Props) => {
  const date = new Date(day);

  const [activities, setActivities] = useState<Activity[]>([]);

  const getActivityData = () => {
    let newActivities: Activity[] = [];
    offers.map((offer) => {
      getActivity(offer.activity).then((newActivity) => {
        newActivities = [...newActivities, newActivity];
        setActivities(newActivities);
      });
    });
    return newActivities;
  };

  useEffect(() => {
    getActivityData();
  }, []);

  return (
    <div className="day">
      <h2>{date.toDateString()}</h2>
      {activities.map((activity) => (
        <p key={activity.id}>{activity.name}</p>
      ))}
    </div>
  );
};

export default DayContainer;
