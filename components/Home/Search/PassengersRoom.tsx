'use client'
import React, { useEffect, useRef, useState } from "react";
import { BsChevronDown, BsPeople } from "react-icons/bs";
import PassengerRoomTracker from "./PassengerRoomTracker";
import { useAppSelector } from "@/redux/store/hook";

export default function PassengersRoom() {
  const [opened, setOpened] = useState(false)

  const store = useAppSelector(store => store.flightBooking.values)
  const value = store.adults + store.children + store.infants

  const ref = useRef<HTMLDivElement | null>(null)
  
  
  const handleClickOutside = (e: any) => {
    if(ref.current && !ref.current.contains(e.target)){
      setOpened(false)
    }
  }
  
  useEffect(() => {

    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
    
  }, [])
  
  
  return (
    <div ref={ref} onClick={() => setOpened(true)} className="h-[50px] shadow-md border-blue-500 select-none cursor-pointer relative flex items-center gap-2 px-4 border-2 rounded">
      <BsPeople size={20} />
      <div className="flex gap-1">
        <p className="font-medium text-sm">
          Travelers <b className="ml-1">{value}</b>
        </p>
      </div>
      <BsChevronDown className="stroke-1 font-semibold ml-auto text-sm" />
      <div className={`absolute top-[130%] border-blue-500 bg-white p-3 space-y-3 border-2 duration-500 rounded shadow-lg ${opened ? "right-0 visible opacity-100" : "opacity-0 invisible -right-20"}`}>
        <PassengerRoomTracker  title="adults" />
        <PassengerRoomTracker title="children" />
        <PassengerRoomTracker title="infants" />
      </div>
    </div>
  );
}
