"use client";

import useFlightSearch from "./useFlightSearch";

export default function SearchButton() {
  const { searchFlights } = useFlightSearch();

  return (
    <button
      className="px-8 h-14 bg-blue-500 duration-300 active:scale-90 rounded-md shadow-md text-white font-semibold"
      onClick={searchFlights}
    >
      Search Flights
    </button>
  );
}
