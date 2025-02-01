'use client'
import {
  setCabinClass,
  setTripType,
} from "@/redux/features/flightBookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import React from "react";

export default function CabinClass() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((store) => store.flightBooking.values.cabinClass);
  const store = useAppSelector((store) => store.flightBooking.values);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-2">
        <p className="font-semibold text-sm">Cabin Class:</p>
        <select
          name=""
          className="bg-transparent px-2 py-1 rounded border-blue-500 text-[13px] outline-none border-2"          value={value}
          onChange={(e) => {
            dispatch(setCabinClass(e.target.value));
          }}
        >
          <option value="round">Economy</option>
          <option value="business">Business</option>
          <option value="first">First</option>
          <option value="vip">VIP</option>
        </select>
      </div>
    </div>
  );
}
