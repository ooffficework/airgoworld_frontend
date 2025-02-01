import React from "react";
import HotelPolicyCard from "./HotelPolicyCard";

export default function HotelPolicy() {
  const hotelDetails = [
    "Check-in and Check-out",
    "Age Requirements",
    "Policy",
    "Cancellation",
  ];

  return (
    <div className="mt-10 p-5 bg-white shadow-md rounded-md ">
      <p className="font-semibold mb-5 text-xl">Hotel Policy</p>
      <div className="flex flex-col gap-6">
        {hotelDetails.map((el, key) => (
          <HotelPolicyCard track={key} key={key} data={el} />
        ))}
      </div>
    </div>
  );
}
