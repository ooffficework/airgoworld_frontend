'use client'
import { useAppSelector } from "@/redux/store/hook";
import React, { useState } from "react";

export default function Photos() {
    const [active, setActive] = useState(0)
    const store = useAppSelector(store => store.hotelDetails)
    console.log(store)

    
  return (
    <div className="flex relative gap-4 h-[450px]">
        {store && store.hotel && store.hotel.images && store.hotel.images.length > 0 && <img src={store.hotel?.images[active].image} className="h-full rounded-lg w-full absolute object-cover top-0 left-0" alt="" />}
    </div>
  );
}
