import React from "react";
import { IoIosAirplane } from "react-icons/io";

export default function TripCard() {
  return (
    <div className="mx-auto rounded-md shadow-lg p-5 bg-blue-50 w-fit">
      <p className="font-semibold text-base">Pakistan International Airlines</p>
      <div className="flex font-medium my-4 justify-between">
        <p>Multan </p>
        <IoIosAirplane size={25} className={``} />
        <p>Jeddah</p>
      </div>
      <div className="">
        <p className="text-sm">From </p>
        <p className="font-bold">USD 385.00</p>
      </div>
    </div>
  );
}
