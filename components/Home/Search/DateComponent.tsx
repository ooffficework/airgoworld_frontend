"use client";
import { setDepartureDate,  setReturnDate } from "@/redux/features/flightBookingSlice";
import { setCheckInDate, setCheckOutDate } from "@/redux/features/hotelBookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GoCalendar } from "react-icons/go";

type Props = {
  error: string;
  type: "hotel" | "flight" | "car";
  label: string;
  name: string;
  placeholder: string;
};

export const DateComponent = ({
  error,
  label,
  name,
  type,
  placeholder,
}: Props) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const dispatch = useAppDispatch();
  const tripType = useAppSelector(
    (store) => store.flightBooking.values.tripType
  );
  return (
    <div
      className={`${name === "returnDate" && tripType === "one_way" && "hidden"}`}
    >
      <div className="h-[53px] text-sm relative grid border-blue-500 shadow-md grid-cols-1 gap-2 items-center rounded border-2">
        <GoCalendar className="absolute top-1/2 left-2 -translate-y-1/2" />
        <DatePicker
          className="h-[50px] pl-8 flex-1 placeholder:text-black w-full text-sm bg-transparent outline-none"
          selected={startDate}
          minDate={new Date()}
          placeholderText={placeholder}
          onChange={(date: Date | null) => {
            setStartDate(date);
            if (date) {
              const day = String(date.getDate()).padStart(2, "0");
              const month = String(date.getMonth() + 1).padStart(2, "0");
              const year = date.getFullYear();
              const formattedDate = `${day}-${month}-${year}`;
              if (name === "departureDate") {
                dispatch(setDepartureDate(formattedDate));
              }
              if (name === "returnDate") {
                dispatch(setReturnDate(formattedDate));
              }
              else if (name === "checkIn") {
                dispatch(setCheckInDate(formattedDate))
              }
              else if (name === "checkOut") {
                dispatch(setCheckOutDate(formattedDate))
              }
            }
          }}
        />
        <label
          htmlFor=""
          className={`absolute -top-3 duration-300 border-blue-500 bg-white px-2 border-2 right-3 pointer-events-none text-xs rounded-full`}
        >
          {label}
        </label>
      </div>
      <p className="text-xs mt-1 text-red-800">{error}</p>
    </div>
  );
};
