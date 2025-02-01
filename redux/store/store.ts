import { configureStore } from '@reduxjs/toolkit';
import { flightBookingSlice } from '../features/flightBookingSlice';
import { HotelBookingSlice } from '../features/hotelBookingSlice';
import { dropdownSlice } from '../features/flightDropdown';
import { authSlice } from '../features/auth';
import { AdminSlice } from '../features/admin';
import { hotelDetailSlice } from '../features/hotelDetailSlice';
import { tabSlice } from '../features/tab';

export const store = configureStore({
  reducer: {
    flightBooking: flightBookingSlice.reducer,
    tab: tabSlice.reducer,
    hotelBooking: HotelBookingSlice.reducer,
    dropdown: dropdownSlice.reducer,
    auth: authSlice.reducer,
    admin: AdminSlice.reducer,
    hotelDetails: hotelDetailSlice.reducer
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch