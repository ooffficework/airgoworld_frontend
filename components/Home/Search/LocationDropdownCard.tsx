"use client";
import { FaHotel, FaPlaneDeparture } from "react-icons/fa";
import AirportsDropdown from "./AirportsDropdown";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import {
  setArrival,
  setDeparture,
} from "@/redux/features/flightBookingSlice";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { BiHotel } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { setLocation } from "@/redux/features/hotelBookingSlice";

type Props = {
  name: string;
  opened: boolean;
  error: string;
  value: string;
  placeholder: string;
  label: string;
  type?: string;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

export default function LocationDropdownCard({
  name,
  value,
  type,
  error,
  opened,
  setOpened,
  label,
  placeholder,
}: Props) {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpened(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.addEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative z-40">
      <div
        ref={ref}
        onClick={() => setOpened(true)}
        className="h-[53px] shadow-md relative rounded border-2 border-blue-500 "
      >
        {type === "hotel" ? (
          <GoLocation className="top-1/2 -translate-y-1/2 pointer-events-none text-base absolute left-3" />
        ) : (
          <FaPlaneDeparture className="top-1/2 -translate-y-1/2 pointer-events-none text-xl absolute left-3" />
        )}
        <input
          type="text"
          value={value}
          onChange={(e) => {
            if (type === "hotel") {
              dispatch(setLocation(e.target.value));
            } else {
              if (name === "arrival") {
                dispatch(setArrival(e.target.value));
              } else if (name === "departure") {
                dispatch(setDeparture(e.target.value));
              }
            }
          }}
          className="w-full h-full bg-transparent pl-10 capitalize overflow-hidden text-ellipsis text-nowrap text-sm outline-none"
        />
        <label
          htmlFor=""
          className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-sm left-10 duration-300 ${value.trim().length > 0 ? "opacity-0" : "opacity-100"}`}
        >
          {placeholder}
        </label>
        <label
          htmlFor=""
          className={`absolute -top-3 duration-300 ${value.trim().length > 0 ? "opacity-100" : "opacity-0"} bg-white px-2 border-2 border-blue-500 opacity-0 right-3 pointer-events-none text-[13px] rounded-sm`}
        >
          {label}
        </label>
      </div>
      <p className="text-[13px] mt-1 text-red-800">{error}</p>
      <AirportsDropdown
        title={name}
        value={value}
        type={type}
        setOpened={setOpened}
        opened={opened}
      />
    </div>
  );
}
