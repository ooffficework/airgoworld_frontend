"use client";
import { FaPlane } from "react-icons/fa";
import { TFlight } from "../Flights_Listings/type";
import store from 'store';


type Props = {
  data: TFlight;
};
export default function Title({ data }: Props) {
  
  const flightStore = store.get('flightStore');

  const formateDate = (timestampStr: string) => {
    const timestamp = new Date(timestampStr);
    const options = { weekday: "long", day: "2-digit", month: "long" };
    return timestamp.toLocaleDateString("en-EN", options as any);
  };

  const formateTime = (timestampStr: string) => {
    const timestamp = new Date(timestampStr);
    const time = timestamp.toLocaleTimeString("en-EN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return time;
  };

  const hours = Number(flightStore.flightDuration.slice(0, 2));

  const minutes = Number(flightStore.flightDuration.slice(3, 5));
  return (
    <div className="wrapper mt-10">
      <p className="text-4xl border-b-2 pb-3">Review your Flight</p>
      <div className="w-96">
        <div className="flex mt-12 font-semibold text-base justify-between items-center">
          <p className="uppercase">
            {flightStore.departureCity} ({flightStore.origin})
          </p>
          <FaPlane className="text-xl" />
          <p className="uppercase">
            {flightStore.arrivalCity} ({flightStore.destination})
          </p>
        </div>
        <p className="text-sm mt-3">
          {hours} {hours === 1 ? "hour" : "hours"}{" "}
          {minutes === 0
            ? ""
            : minutes === 1
              ? `1 minute`
              : `${minutes} minutes`}{" "}
        </p>
        <div className="flex justify-between items-center mt-3">
          <div className="">
            <p className="font-semibold">{flightStore.departureCity}</p>
            <p className="text-sm">{formateDate(data.departure_date)}</p>
            <p className="text-sm">{formateTime(data.departure_date)}</p>
          </div>
          <div className="">
            <p className="font-semibold">{flightStore.arrivalCity}</p>
            <p className="text-sm">{formateDate(data.arrival_date)}</p>
            <p className="text-sm">{formateTime(data.arrival_date)}</p>
          </div>
        </div>
        <div className="flex capitalize text-lg font-semibold mt-5">
          <p>{data.airline.name}</p>
        </div>
      </div>
    </div>
  );
}
