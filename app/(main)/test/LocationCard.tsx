"use client"
import { setLocation } from "@/redux/features/hotelBookingSlice";
import { useAppDispatch } from "@/redux/store/hook";
import React from "react";
import { GrLocation } from "react-icons/gr";

export default function LocationCard({ el }: any) {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(setLocation(el.state))}
      className="flex p-2 hover:bg-blue-600 items-center overflow-y-auto hover:text-white duration-200 active:scale-90 cursor-pointer  gap-2"
    >
      <GrLocation className="duration-300 text-lg " />
      <div className="">
        <p className="font-semibold duration-300 text-sm">{el?.state}</p>
        <p className="font-semibold duration-300 text-sm">{el?.country}</p>
      </div>
    </div>
  );
}
