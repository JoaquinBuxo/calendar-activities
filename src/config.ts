const API_URL: string = "https://api.staging.bsport.io/api/v1/";
const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;

// Offer url with company id and page size filters
export const offerUrl: string = `${API_URL}offer?api_key=${API_KEY}`;

// Get data from activity
export const activityUrl = (activityId: number) =>
  `${API_URL}meta-activity/${activityId}?api_key=${API_KEY}`;

// Get data from member
export const memberUrl = (memberId: number) =>
  `${API_URL}member/${memberId}?api_key=${API_KEY}`;

// Get data from coach
export const coachUrl = (coachId: number) =>
  `${API_URL}coach/${coachId}?api_key=${API_KEY}`;

// Get data from establishment
export const establishmentUrl = (establishmentId: number) =>
  `${API_URL}establishment/${establishmentId}?api_key=${API_KEY}`;
