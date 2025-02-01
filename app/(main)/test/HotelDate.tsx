"use client";
import { setCheckInDate, setCheckOutDate } from "@/redux/features/hotelBookingSlice";
import { useAppDispatch } from "@/redux/store/hook";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";

type Props = {
  placeholder: string;
};

export default function HotelDate({ placeholder }: Props) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const dispatch = useAppDispatch();
  return (
    <div className="h-[53px] shadow-md border-blue-500 relative rounded-md border-2">
      <BsCalendar className="absolute top-1/2 -translate-y-1/2 left-2" />
      <DatePicker
        className="h-[50px] pl-8 flex-1 placeholder:text-black w-full text-sm bg-transparent outline-none"
        selected={startDate}
        minDate={new Date()}
        placeholderText={placeholder}
        onChange={(date: Date | null) => {
          setStartDate(date);
          if(date){
              const day = String(date.getDate()).padStart(2, "0");
              const month = String(date.getMonth() + 1).padStart(2, "0");
              const year = date.getFullYear();
              const formattedDate = `${day}-${month}-${year}`;
              if (placeholder === "Check-In") {
                dispatch(setCheckInDate(formattedDate));
              }else{
                dispatch(setCheckOutDate(formattedDate));
              }
          }
        }}
      />
    </div>
  );
}
