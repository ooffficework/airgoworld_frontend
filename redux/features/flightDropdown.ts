import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: -1,
};

export const dropdownSlice = createSlice({
  name: "flightBooking",
  initialState,
  reducers: {
    closeDropdown: (state) => {
      state.value = -1;
    },
    setDropdown: (state, action) => {
      if (action.payload === state.value) {
        state.value = -1;
      } else {
        state.value = action.payload;
      }
    },
  },
});

export const { closeDropdown, setDropdown } = dropdownSlice.actions;
