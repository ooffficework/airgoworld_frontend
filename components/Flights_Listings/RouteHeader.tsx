'use client'
import { IoMdAirplane } from "react-icons/io";
import store from 'store';

export default function RouteHeader() {
  const flightStore = store.get('flightStore') || {};
  return (
    <div className=" gap-10 wrapper my-10">
      <div className="flex items-center gap-12 text-4xl font-semibold">
        <p>
          {flightStore.departureCity} ({flightStore.departureIata})
        </p>{" "}
        <IoMdAirplane className="rotate-90" />
        <p>
          {flightStore.arrivalCity} ({flightStore.arrivalIata})
        </p>{" "}
      </div>
      <p className="mt-5 text-sm">
        Prices are per adult, including all taxes, fees and carrier charges.
      </p>
      <p className="text-lg mt-1 font-semibold"> {flightStore.departureCity} ({flightStore.departureIata}) Departures</p>
    </div>
  );
}
