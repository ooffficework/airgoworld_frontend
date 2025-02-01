type Airline = {
    id: number;
    name: string;
    iata: string;
    country: string;
    active: boolean;
    status: "active" | "inactive";
    logo: string; // Image URL
    created_at: string; // ISO datetime
    updated_at: string; // ISO datetime
  };
  
  type Airport = {
    name: string;
    id: string
    city: string;
    country: string;
    iata: string; // 3-letter code
    scope: "domestic" | "international";
    active: boolean;
    status: "active" | "inactive";
  };
  
  type Cabin = {
    id: number;
    name: "economy" | "business" | "first" | "vip";
    prices: {
      adult: number;
      children: number;
      infant: number;
    };
    amenities: string[];
    flight: number; // ID of the flight
  };
  
  export type TFlight = {
    id: string;
    airline: Airline;
    origin: Airport;
    destination: Airport;
    cabin: Cabin[];
    trip_type: "one_way" | "round";
    flight_number: string;
    departure_date: string; // ISO datetime
    arrival_date: string; // ISO datetime
    flight_duration: string; // HH:MM:SS
    return_date: string | null; // ISO datetime or null
    created_at: string; // ISO datetime
    updated_at: string; // ISO datetime
    image?: string | null; // Optional image URL
  };
  

  export type TFlight2 = {
    economy: string | number,
    business: string | number,
    first: string | number,
    vip: string | number,
    duration: string,
    departure_date: string,
    airline: string,
    origin: string,
    departure_time: "",
    destination: string,
  };
  