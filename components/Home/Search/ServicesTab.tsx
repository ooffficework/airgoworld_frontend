'use client'
import { setTab } from "@/redux/features/tab";
import { useAppDispatch } from "@/redux/store/hook";
import { useState } from "react";

export default function ServicesTab() {
  const dispatch = useAppDispatch()
  const [active, setActive] = useState(-100)
  return (
    <div className="hidden mx-auto lg:grid rounded-t-md border-b-2 border-blue-500 overflow-hidden bg-white grid-cols-4">
      <button className={`py-4 active:scale-90 ${active === 0 && "bg-blue-600 text-white"} duration-500 text-[15px]`} onClick={() => {
        setActive(0)
        dispatch(setTab('flight'))}}>✈️ Book a Flight</button>
      <button className={`py-4 active:scale-90 ${active === 1 && "bg-blue-600 text-white"} duration-500 text-[15px]`} onClick={() => {
        setActive(1)
        dispatch(setTab('hotel'))}}>🏨 Book a Hotel</button>
      <button className={`py-4 active:scale-90 ${active === 2 && "bg-blue-600 text-white"} duration-500 text-[15px]`} onClick={() => {
        setActive(2)
        dispatch(setTab('ride'))}}>🚗 Book a Ride</button>
      <button className={`py-4 active:scale-90 ${active === 3 && "bg-blue-600 text-white"} duration-500 text-[15px]`} onClick={() => {
        setActive(3)
        dispatch(setTab('tour'))}}>🏞️ Go on Tour</button>
    </div>
  );
}
