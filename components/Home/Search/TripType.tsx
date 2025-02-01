'use client'
import { setTripType } from "@/redux/features/flightBookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import React from "react";

export default function TripType() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((store) => store.flightBooking.values.tripType);
  const store = useAppSelector((store) => store.flightBooking.values);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-2">
        <p className="font-semibold text-sm">Trip Type:</p>
        <select
          name=""
          className="bg-transparent px-2 py-1 rounded border-blue-500 text-[13px] outline-none border-2"
          value={value}
          onChange={(e) => {
            dispatch(setTripType(e.target.value));
            console.log(store)
          }}
        >
          <option value="round">Round</option>
          <option value="one_way">One Way</option>
        </select>
      </div>
    </div>
  );
}
