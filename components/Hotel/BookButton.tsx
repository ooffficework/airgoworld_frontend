'use client'
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import React from "react";
import store from "store";
import { setError } from "@/redux/features/hotelBookingSlice";
import { useRouter } from "next/navigation";
import { differenceInDays } from "date-fns";

type Props = {
  hotel_id: string
}

export default function BookButton({hotel_id}: Props) {
  const values = useAppSelector(store => store.hotelBooking.values)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const handleSubmit = () => {
    if(!values.checkIn){
      return dispatch(setError({checkIn: 'Please select a date for Checkin'}))
    }
    if(!values.checkOut){
      return dispatch(setError({checkOut: 'Please select a date for Checkout'}))
    }
    if(values.checkIn && values.checkOut){
      const days= differenceInDays(
        new Date(values.checkOut),
        new Date(values.checkIn)
      )
      store.set('BookingDetails', {...values, hotel_id, days})
    }
   
    router.push(`/hotels/book/?hotel_id=${hotel_id}`)
  }
  return (
    <div className="flex justify-center mt-4">
      <button onClick={handleSubmit} className="bg-blue-600 px-4 py-3 rounded-md shadow-md font-semibold duration-300 active:scale-90 text-white">
        Book Now
      </button>
    </div>
  );
}
