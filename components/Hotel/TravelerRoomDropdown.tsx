"use client";
import {
  decreaseAdultNumber,
  decreaseChildrenNumber,
  decreaseRoomNumber,
  increaseAdultNumber,
  increaseChildrenNumber,
  increaseRoomNumber,
} from "@/redux/features/hotelBookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

type Props = {
  opened: boolean;
  type: string
};

export default function TravelerRoomDropdown({ opened, type }: Props) {
  const values = useAppSelector((store) => store.hotelBooking.values);
  const dispatch = useAppDispatch();

  return (
    <div
    onClick={(e) => e.stopPropagation()}
      className={`h-40 absolute text-sm p-3 space-y-3 shadow-md duration-500 rounded bg-white shadow-gray-500 ${type === 'search' ? "top-[110%]": "-top-[190%]"} right-0 w-full ${opened ? "opacity-100 visible translate-y-0" : "invisible opacity-0 translate-y-7"}`}
    >
      <div className="flex items-center justify-between">
        <p>Adults</p>
        <div className="flex ">
          <div
            onClick={() => dispatch(decreaseAdultNumber())}
            className="h-8 w-8 rounded border-2 grid duration-300 active:scale-95 cursor-pointer place-content-center"
          >
            <BiMinus />
          </div>
          <div className="h-8 w-8 rounded grid place-content-center font-semibold">
            {values.adults}
          </div>
          <div
            onClick={() => dispatch(increaseAdultNumber())}
            className="h-8 w-8 rounded border-2 grid duration-300 active:scale-95 cursor-pointer place-content-center"
          >
            <BiPlus />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>Children</p>
        <div className="flex ">
          <div
            onClick={() => dispatch(decreaseChildrenNumber())}
            className="h-8 w-8 rounded border-2 grid duration-300 active:scale-95 cursor-pointer place-content-center"
          >
            <BiMinus />
          </div>
          <div className="h-8 w-8 rounded grid place-content-center font-semibold">
            {values.children}
          </div>
          <div
            onClick={() => dispatch(increaseChildrenNumber())}
            className="h-8 w-8 rounded border-2 grid duration-300 active:scale-95 cursor-pointer place-content-center"
          >
            <BiPlus />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>Rooms</p>
        <div onClick={() => dispatch(decreaseRoomNumber())} className="flex ">
          <div className="h-8 w-8 rounded border-2 grid duration-300 active:scale-95 cursor-pointer place-content-center">
            <BiMinus />
          </div>
          <div className="h-8 w-8 rounded grid place-content-center font-semibold">
            {values.rooms}
          </div>
          <div
            onClick={() => dispatch(increaseRoomNumber())}
            className="h-8 w-8 rounded border-2 grid duration-300 active:scale-95 cursor-pointer place-content-center"
          >
            <BiPlus />
          </div>
        </div>
      </div>
    </div>
  );
}
