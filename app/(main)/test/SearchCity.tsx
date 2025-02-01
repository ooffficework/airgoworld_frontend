"use client";
import { TbMapPin } from "react-icons/tb";
import { setLocation } from "@/redux/features/hotelBookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import LocationsDropdown from "./LocationsDropdown";
import { Dispatch, RefObject, SetStateAction } from "react";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
  dropdownRef: RefObject<HTMLElement | null>
}


export default function SearchCity({setIsOpen, open, dropdownRef}: Props) {
  const dispatch = useAppDispatch();
  const location = useAppSelector(
    (store) => store.hotelBooking.values.location
  );

  return (
    <div onClick={() => setIsOpen(true)} className="h-[53px] border-blue-500 relative rounded-md border-2">
      <TbMapPin className="absolute top-1/2 -translate-y-1/2 left-2 text-lg"/>
      <input
        type="text"
        value={location}
        placeholder="Search by Location"
        onChange={(e) => dispatch(setLocation(e.target.value))}
        className="h-full pl-8 capitalize w-full text-sm rounded-md outline-none  bg-white"
      />
      <LocationsDropdown dropdownRef={dropdownRef} location={location} open={open}/>
    </div>
  );
}
