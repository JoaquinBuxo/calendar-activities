import { Offers } from "../common/types";
import { offerUrl } from "../config";

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
  numOffersPage = 10
) => {
  const offers = await basicFetch<Offers>(
    `${offerUrl}&company=${companyId}&page_size=${numOffersPage}&page=2`
  );
  return offers.results;
};
