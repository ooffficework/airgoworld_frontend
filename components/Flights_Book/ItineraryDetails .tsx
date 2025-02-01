"use client";
import { IoAirplaneSharp } from "react-icons/io5";
import store from "store";
export default function ItineraryDetails() {
  const flightStore = store.get("flightStore") || {};
   const [day, month, year] = flightStore.departureDate.split("-").map(Number);
  const date = new Date(year, month - 1, day); 
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  return (
    <div>
      <div className="p-5 h-full flex flex-col border w-[350px]">
        <p className="text-lg font-semibold mb-6">Your Journey</p>
        <div className="border-2 shadow-md overflow-hidden rounded-lg">
          <div className="border-b-2 bg-gray-50 p-3 text-sm">
            <div className="flex text-sm justify-between items-center">
              <p>{formattedDate}</p>
              <p className="font-semibold uppercase">
                {flightStore.cabinClass} CLASS
              </p>
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-between items-center text-sm mb-2">
              <p className="capitalize">{flightStore.airline}</p>
              <p>
                {flightStore.flightDuration.slice(0, 2)}h{" "}
                {flightStore.flightDuration.slice(3, 5)}m
              </p>
            </div>
            <div className="flex font-semibold mb-2 items-center gap-2 justify-between">
              <p>{flightStore.departureDate.slice(11, 16)}</p>
              <div className="flex-1 h-[1px] bg-black"></div>
              <IoAirplaneSharp className="text-lg" />
              <div className="flex-1 h-[1px] bg-black"></div>
              <p>{flightStore.arrivalDate.slice(11, 16)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>{flightStore.departureCity}</p>
              <p>{flightStore.arrivalCity}</p>
            </div>
          </div>
        </div>
        <p className="text-lg font-semibold mb-1 mt-7">Passengers</p>
        <div className="space-y-2">
          <p className="grid grid-cols-[100px_1fr] font-medium w-full">
            <span>Adults: </span>
            <span>{flightStore.adults}</span>
          </p>
          {flightStore.children != 0 && (
            <p className="grid grid-cols-[100px_1fr] font-medium w-full">
              <span>Children: </span>
              <span>{flightStore.children}</span>
            </p>
          )}
          {flightStore.infants != 0 && (
            <p className="grid grid-cols-[100px_1fr] font-medium w-full">
              <span>Infants: </span>
              <span>{flightStore.infants}</span>
            </p>
          )}
        </div>
        <div className="mt-5 flex flex-col items-end">
          <p className="font-semibold">TOTAL</p>
          <p className="text-xl font-bold">
            ${Number(flightStore.total).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
