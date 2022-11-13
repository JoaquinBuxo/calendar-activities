export type Offer = {
  id: number;
  company: number;
  activity: number;
  level: number;
  custom_level: number;
  available: boolean;
  coach: number;
  coach_override: number;
  partner_max_booking_count: number;
  establishment: number;
  meta_activity: number;
  date_start: string;
  duration_minute: number;
  effectif: number;
  establishment_override: number;
  recurrence_id: string;
  waiting_list_max_size: number;
  bookings: [];
  meta_activity_color: string;
  full: boolean;
};

export type Offers = {
  count: number;
  next: string;
  previous: string;
  results: Offer[];
};
