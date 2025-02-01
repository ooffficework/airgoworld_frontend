import FlightSearchForm from "@/components/Flights/FlightSearchInputs";
import React from "react";
import TripType from "./TripType";
import CabinClass from "./CabinClass";
import SearchButton from "@/components/Flights/SearchButton";

export default function FlightForm() {
  return (
    <div className="relative z-50 backdrop-blur-lg bg-white p-8 rounded-lg rounded-t-none shadow-md gap-1">
      <FlightSearchForm />
      <div className="flex flex-col lg:flex-row gap-5 justify-between items-center mt-7">
        <div className="flex items-center gap-7">
          <TripType />
          <CabinClass />
        </div>
        <SearchButton />
      </div>
    </div>
  );
}
