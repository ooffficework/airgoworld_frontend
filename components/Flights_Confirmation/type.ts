export interface TBooking {
    id: number;
    flight: Flight;
    cabin: Cabin;
    fullname: string;
    email: string;
    gender: string;
    phone: string;
    booking_date: string; // ISO date string
    invoice_number: string;
    booking_status: string;
    currency: string;
    booking_id: string;
    pnr: string;
    payment_status: string;
    children: number;
    infants: number;
    adults: number;
    amount: string; // Consider changing to `number` if needed
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
    user: number;
  }
  
 export interface Flight {
    id: number;
    airline: Airline;
    destination: Airport;
    origin: Airport;
    cabin: Cabin[];
    trip_type: string;
    flight_number: string;
    departure_date: string; // ISO date string
    arrival_date: string; // ISO date string
    flight_duration: string; // Format: HH:mm:ss
    return_date: string | null; // ISO date string or null
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
  }
  
  interface Airline {
    id: number;
    name: string;
    iata: string;
    country: string;
    active: boolean;
    status: string;
    logo: string;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
  }
  
  interface Airport {
    id: number;
    name: string;
    state: string;
    country: string;
    iata: string;
    scope: string;
    active: boolean;
    status: string;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
  }
  
  interface Cabin {
    id: number;
    name: string;
    prices: Prices;
    amenities: string[];
    flight: number;
  }
  
  interface Prices {
    adult: number;
    children: number;
    infant: number;
  }
  