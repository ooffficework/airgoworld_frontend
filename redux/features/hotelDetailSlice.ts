import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type THotel = {
  id: number;
  rating: string;
  price_per_night: string;
  parking: boolean;
  images: {
    image: string
    id: number
  }[]
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

type HotelState = {
  hotel: THotel | null;
};

const initialState: HotelState = {
  hotel: null,
};

export const hotelDetailSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setHotel: (state, action: PayloadAction<THotel>) => {
      state.hotel = action.payload;
    },
    clearHotel: (state) => {
      state.hotel = null;
    },
  },
});

export const { setHotel, clearHotel } = hotelDetailSlice.actions;
