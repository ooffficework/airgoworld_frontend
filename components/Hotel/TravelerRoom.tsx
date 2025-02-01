"use client";
import { BsPerson, BsPlus } from "react-icons/bs";
import TravelerRoomDropdown from "./TravelerRoomDropdown";
import { useAppSelector } from "@/redux/store/hook";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function TravelerRoom() {
  const values = useAppSelector((store) => store.hotelBooking.values);
  const passengers = values.adults + values.children;
  const [opened, setOpened] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpened(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [])
  

  return (
    <div
      ref={ref}
      onClick={() => setOpened(true)}
      className="h-[53px] relative text-sm pl-2 border-blue-500 shadow-md flex gap-2 items-center rounded border-2"
    >
      <BsPerson className="text-lg" />
      <p>Passengers {passengers}</p>
      <p className="ml-1">Rooms {values.rooms}</p>
      <TravelerRoomDropdown type="search" opened={opened} />
    </div>
  );
}
