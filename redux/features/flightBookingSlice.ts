import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: {
    departure: '',
    arrival: '',
    departureCity: '',
    departureIata: '',
    arrivalCity: '',
    arrivalIata: '',
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    flightDuration: '',
    flight: '',
    children: 0,
    adults: 1,
    infants: 0,
    tripType: 'round', 
    cabinClass: 'economy', 
  },
  errors: {
    departure: '',
    arrival: '',
    departureDate: '',
    returnDate: '',
  }

};

export const flightBookingSlice = createSlice({
  name: 'flightBooking',
  initialState,
  reducers: {
    setField(state, action) {
      state.values = {...state.values, ...action.payload, };
    },
    setDeparture(state, action) {
      state.values.departure = action.payload;
      state.errors.departure = ""
    },
    setOrigin(state, action) {
      state.values.origin = action.payload;
    },
    setArrival(state, action) {
      state.values.arrival = action.payload;
      state.errors.arrival = ""
    },
    setDestination(state, action) {
      state.values.destination = action.payload;
    },
    setDepartureDate(state, action) {
      state.values.departureDate = action.payload;
      state.errors.departureDate = ""
    },
    setReturnDate(state, action) {
      state.values.returnDate = action.payload;
      state.errors.returnDate = ""
    },
    increaseAdultsNumber(state) {
      state.values.adults += + 1;
    },
    decreaseAdultsNumber(state) {
      state.values.adults = state.values.adults === 1 ? 1 : state.values.adults - 1;
    },
    increaseChildrenNumber(state) {
      state.values.children += + 1;
    },
    decreaseChildrenNumber(state) {
      state.values.children = state.values.children === 0 ? 0 : state.values.children - 1;
    },
    increaseInfantsNumber(state) {
      state.values.infants += + 1;
    },
    decreaseInfantsNumber(state) {
      state.values.infants = state.values.infants === 0 ? 0 : state.values.infants - 1;
    },
    setTripType(state, action) {
      state.values.tripType = action.payload;
    },
    setCabinClass(state, action) {
      state.values.cabinClass = action.payload;
    },
    setDepartureError(state, action) {
      state.errors.departure = action.payload
    },
    setArrivalError(state, action) {
      state.errors.arrival = action.payload
    },
    setDepartureDateError(state, action) {
      state.errors.departureDate = action.payload
    },
    setReturnDateError(state, action) {
      state.errors.returnDate = action.payload
    },
    resetForm(state) {
      Object.assign(state, initialState); 
    },
  },
});

export const {
  setDeparture,
  setArrival,
  setField,
  setDepartureDate,
  setReturnDate,
  setTripType,
  setDestination,
  setOrigin,
  decreaseAdultsNumber,
  decreaseChildrenNumber,
  decreaseInfantsNumber,
  increaseAdultsNumber, 
  increaseChildrenNumber, 
  increaseInfantsNumber,
  setCabinClass,
  resetForm,
  setArrivalError, 
  setDepartureDateError,
  setDepartureError,
  setReturnDateError
} = flightBookingSlice.actions;

