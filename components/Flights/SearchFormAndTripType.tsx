'use client'
import React from "react";
import FlightSearchForm from "./FlightSearchInputs";
import TripType from "../Home/Search/TripType";
import CabinClass from "../Home/Search/CabinClass";
import Button from "../Admin/General/Button";

export default function SearchFormAndTripType() {
  const submit = () => {};

  return (
    <div>
      <FlightSearchForm />
      <div className="flex">
        <div className="flex">
          <TripType />
          <CabinClass />
        </div>
        <Button submit={submit} title="Submit" loading />
      </div>
    </div>
  );
}
