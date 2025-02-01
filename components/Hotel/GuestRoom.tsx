"use client";
import React, { useEffect, useRef, useState } from "react";
import TravelerRoomDropdown from "./TravelerRoomDropdown";
import { BsChevronDown } from "react-icons/bs";
import { useAppSelector } from "@/redux/store/hook";

export default function GuestRoom() {
  const [opened, setOpened] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpened(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const values = useAppSelector(store => store.hotelBooking.values)

  return (
    <div ref={ref} onClick={() => setOpened(!opened)} className="mt-3 cursor-pointer relative">
      <p className="font-semibold text-[15px] mb-1">Guests & Room</p>
      <div className="h-12 text-sm border-2 flex items-center pl-2 rounded-md">
        <p>
          Guests <b className="font-semibold">{values.adults + values.children}</b> <b className="ml-3"></b>Rooms <b className="font-semibold">{values.rooms}</b>
        </p>
        <BsChevronDown className={`ml-auto mr-3 text-sm stroke-1 duration-500 ${!opened && "rotate-180"}`}/>
      </div>
      <TravelerRoomDropdown type="book" opened={opened} />
    </div>
  );
}
