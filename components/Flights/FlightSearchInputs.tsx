"use client";
import { useState } from "react";
import LocationDropdownCard from "../Home/Search/LocationDropdownCard";
import { DateComponent } from "../Home/Search/DateComponent";
import PassengersRoom from "../Home/Search/PassengersRoom";
import useFlightSearch from "./useFlightSearch";


export default function FlightSearchInputs() {
  const { values, errors } = useFlightSearch();
  const [departureOpened, setDepartureOpened] = useState(false);
  const [arrivalOpened, setArrivalOpened] = useState(false);

  return (
    <div className={`grid gap-7 rounded-none bg-white ${values.tripType === 'round' ? 'grid-cols-[1fr_1fr_1.75fr_1fr]': 'grid-cols-4'} lg:gap-2 justify-between`}>
      <LocationDropdownCard
        error={errors.departure}
        label="Departure"
        placeholder="From"
        name="departure"
        opened={departureOpened}
        setOpened={setDepartureOpened}
        value={values.departure}
      />
      <LocationDropdownCard
        error={errors.arrival}
        label="Arrival"
        placeholder="To"
        setOpened={setArrivalOpened}
        value={values.arrival}
        name="arrival"
        opened={arrivalOpened}
      />
      <div className={`grid gap-2 ${values.tripType === "round" && "grid-cols-2"}`}>
        <DateComponent type="flight" error={errors.departureDate} label="Departure" name="departureDate" placeholder="Departure Date" />
        <DateComponent type="flight" error={errors.returnDate} label="Return" name="returnDate" placeholder="Return Date" />
      </div>
      <PassengersRoom />
    </div>
  );
}
