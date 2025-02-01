type Hotel = {
    id: number;
    rating: string;
    price_per_night: string;
    parking: boolean;
    images: string[];
    restaurant: boolean;
    available: boolean;
    wifi: boolean;
    casino: boolean;
    active: boolean;
    address: string;
    country: string;
    pool: boolean;
    spa: boolean;
    gym: boolean;
    bar: boolean;
    state: string;
    name: string;
    description: string;
    updated_at: string;
    created_at: string;
  };
  
  export type TBookingDetails = {
    id: number;
    hotel: Hotel;
    price: string;
    fullname: string;
    email: string;
    phone: string;
    gender: string;
    booked_at: string;
    display: boolean;
    check_out_date: string;
    check_in_date: string;
    occupants: number;
    no_of_rooms: number;
    updated_at: string;
    user: number;
  };
   