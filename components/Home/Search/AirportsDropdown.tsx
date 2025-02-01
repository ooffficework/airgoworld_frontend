"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import {
  setArrival,
  setDeparture,
  setDestination,
  setOrigin,
} from "@/redux/features/flightBookingSlice";
import { Dispatch, SetStateAction } from "react";
import { useAirportSearch } from "./useAirportSearch";
import AirportListItem from "./AirportListItem";
import { setLocation } from "@/redux/features/hotelBookingSlice";

type Props = {
  setOpened: Dispatch<SetStateAction<boolean>>;
  opened: boolean;
  value: string;
  title: string;
  type?: string;
};

export default function AirportsDropdown({
  opened,
  setOpened,
  value,
  title,
  type,
}: Props) {
  const dispatch = useAppDispatch();
  const values = useAppSelector((store) => store.flightBooking.values);

  const { data, loading, error } = useAirportSearch(value);

  const handleSelect = (name: string, iata: string) => {
    if (title === "departure") {
      dispatch(setLocation(name));
      dispatch(setOrigin(iata));
      dispatch(setDeparture(name));

    } else {
      dispatch(setLocation(name));
      dispatch(setArrival(name));
      dispatch(setDestination(iata));
    }
    setOpened(false);
  };

  return (
    <div className="relative">
      <div
        className={`h-60 w-full lg:w-[200%] left-0 flex flex-col rounded-lg shadow-md overflow-y-auto top-[105%] absolute duration-300 bg-white ${
          opened ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* {error && (
          <p className="text-red-500 text-center py-4">Error: {error}</p>
        )} */}

        {!loading && data.length > 0 ? (
          data.map((airport, key) => (
            <AirportListItem
              key={key}
              airport={airport}
              type={type}
              onSelect={() => handleSelect(airport.name, airport.iata)}
            />
          ))
        ) : (
          <div className="h-full w-full grid place-content-center">
            {(!loading && values.departure.trim().length > 0) && <p className="text-center py-4">No results found</p>}
            {loading && <span className="loader"></span>}
          </div>
        )}
      </div>
    </div>
  );
}
