import { Activity, Offers } from "../common/types";
import { activityUrl, coachUrl, offerUrl } from "../config";

export const basicFetch = async <returnType>(
  urlEndpoint: string
): Promise<returnType> => {
  const response = await fetch(urlEndpoint);

  if (!response.ok) {
    throw new Error(`Error status ${response.status}`);
  }

  const data = await response.json();

  return data;
};

export const fetchOffersByCompany = async (
  companyId = 6,
  numOffersPage = 10,
  numPage = 1
) => {
  const offers = await basicFetch<Offers>(
    `${offerUrl}&company=${companyId}&page_size=${numOffersPage}&page=${numPage}`
  );
  return offers.results;
};

export const getActivity = async (activityId: number) => {
  const activityData = await basicFetch<Activity>(`${activityUrl(activityId)}`);
  return activityData;
};

export const getCoach = async (coachId: number) => {
  const coachData = await basicFetch<Activity>(`${coachUrl(coachId)}`);
  return coachData;
};
