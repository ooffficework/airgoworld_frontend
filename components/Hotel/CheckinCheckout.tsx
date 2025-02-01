'use client'

import {
  setCheckInDate,
  setCheckOutDate,
} from "@/redux/features/hotelBookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import React, { useEffect } from "react";
import store from 'store'
export default function CheckinCheckout() {
  const dispatch = useAppDispatch();
  const values = useAppSelector((store) => store.hotelBooking.values);
  const errors = useAppSelector((store) => store.hotelBooking.errors);
  const today = new Date().toISOString().split("T")[0];
  const date = store.get('dates')
  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split("-"); 
    return `${year}-${month}-${day}`;
  };
  
  useEffect(() => {
    dispatch(setCheckInDate(formatDate(date?.checkIn)))
    dispatch(setCheckOutDate(formatDate(date?.checkOut)))
  }, [values]);

  return (
    <div className="grid-cols-2 mt-3 grid gap-3">
      <div className="">
        <p className="font-semibold text-[15px] mb-1">Checkin</p>
        <div className="h-12 ">
          <input
            type="date"
            min={today}
            value={values.checkIn}
            onChange={(e) => dispatch(setCheckInDate(e.target.value))}
            className="bg-transparent shadow outline-none cursor-pointer px-2 text-[13px] rounded-md py-2 border-2"
          />
        </div>
        {errors.checkIn && (
          <p className="text-xs mt-1 text-red-600">{errors.checkIn}</p>
        )}
      </div>
      <div className="">
        <p className="font-semibold text-[15px] mb-1">Checkout</p>
        <div className="h-12 ">
          <input
            type="date"
            min={today}
            value={values.checkOut}
            onChange={(e) => dispatch(setCheckOutDate(e.target.value))}
            className="bg-transparent shadow outline-none cursor-pointer px-2 text-[13px] rounded-md py-2 border-2"
          />
        </div>
        {errors.checkOut && (
          <p className="text-xs mt-1 text-red-600">{errors.checkOut}</p>
        )}
      </div>
    </div>
  );
}
