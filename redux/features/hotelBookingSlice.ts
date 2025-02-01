import { createSlice } from "@reduxjs/toolkit";
import { differenceInDays } from "date-fns";

const initialState = {
  values: {
    location: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    rooms: 1,
    children: 0,
  },
  errors: {
    location: "",
    checkIn: "",
    checkOut: "",
  },
};

export const HotelBookingSlice = createSlice({
  name: "hotelBooking",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.values.location = action.payload;
      state.errors.location = "";
    },
    setCheckInDate: (state, action) => {
      state.values.checkIn = action.payload;

      if (state.values.checkOut) {
        const daysDiff = differenceInDays(
          new Date(state.values.checkIn),
          new Date(state.values.checkOut)
        );

        if (daysDiff >= 0) {
          state.errors.checkIn =
            "Check-in date cannot be later than or the same as check-out date";
        } else {
          state.errors.checkIn = ""; 
        }
      }
    },
    setCheckOutDate: (state, action) => {
      state.values.checkOut = action.payload;

      if (state.values.checkIn) {
        const daysDiff = differenceInDays(
          new Date(state.values.checkIn),
          new Date(state.values.checkOut)
        );

        if (daysDiff >= 0) {
          state.errors.checkIn =
            "Check-in date cannot be later than or the same as check-out date";
        } else {
          state.errors.checkOut = ""; 
        }
      }
    },
    increaseRoomNumber: (state) => {
      state.values.rooms += 1;
    },
    decreaseRoomNumber: (state) => {
      state.values.rooms === 1 ? 1 : state.values.rooms - 1;
    },
    increaseAdultNumber: (state) => {
      state.values.adults += 1;
    },
    decreaseAdultNumber: (state) => {
      state.values.adults =
        state.values.adults === 1 ? 1 : state.values.adults - 1;
    },
    increaseChildrenNumber: (state) => {
      state.values.children += 1;
    },
    decreaseChildrenNumber: (state) => {
      state.values.children =
        state.values.children === 0 ? 0 : state.values.children - 1;
    },
    setError: (state, action) => {
      state.errors = { ...state.errors, ...action.payload };
    },
  },
});

export const {
  setError,
  decreaseAdultNumber,
  decreaseChildrenNumber,
  decreaseRoomNumber,
  increaseAdultNumber,
  increaseChildrenNumber,
  increaseRoomNumber,
  setCheckInDate,
  setCheckOutDate,
  setLocation,
} = HotelBookingSlice.actions;
