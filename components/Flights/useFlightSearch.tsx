import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { useRouter } from "next/navigation";
import store from "store";
import {
  setArrivalError,
  setDepartureDateError,
  setDepartureError,
  setReturnDateError,
} from "@/redux/features/flightBookingSlice";

export default function useFlightSearch() {
  const values = useAppSelector((state) => state.flightBooking.values);
  const errors = useAppSelector((state) => state.flightBooking.errors);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchFlights = () => {
    let hasError = false;
    if (!values.departure.trim()) {
      dispatch(setDepartureError("Please fill in your Departure Location"));
      hasError = true;
    }
    if (!values.arrival.trim()) {
      dispatch(setArrivalError("Please fill in your Arrival Location"));
      hasError = true;
    }
    if (
      values.departure.trim() &&
      values.arrival.trim() &&
      values.departure.trim() === values.arrival.trim()
    ) {
      dispatch(setArrivalError("Departure and Arrival cannot be the same"));
      hasError = true;
    }
    if (!values.departureDate.trim()) {
      dispatch(setDepartureDateError("Please fill in your Departure Date"));
      hasError = true;
    }
    if (values.tripType === "round" && !values.returnDate) {
      dispatch(setReturnDateError("Please fill in your Return Date"));
      hasError = true;
    } else {
      dispatch(setReturnDateError(""));
    }
    if (!hasError) {
      store.set("flightStore", values);
      router.push(
        `/flights/listings?origin=${values.origin}&destination=${values.destination}&departure_date=${values.departureDate}&trip_type=${values.tripType}`
      );
    }
  };

  return { searchFlights, values, errors };
}