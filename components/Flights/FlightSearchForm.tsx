"use client";
import FlightSearchInputs from "./FlightSearchInputs";
import SearchButton from "./SearchButton";
import TripType from "../Home/Search/TripType";
import CabinClass from "../Home/Search/CabinClass";

export default function FlightSearchForm() {
  return (
    <div className="wrapper z-40 relative">
      <div className="relative z-50 backdrop-blur-lg bg-white p-8 rounded-lg rounded-t-none shadow-md gap-1">
        <FlightSearchInputs />
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center mt-7">
          <div className="flex items-center gap-7">
            <TripType />
            <CabinClass />
          </div>
          <SearchButton />
        </div>
      </div>
    </div>
  );
}
