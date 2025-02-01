"use client";
import React, { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import HotelHeader from "./HotelHeader";
import Photos from "./Photos";
import Description from "./Description";
import HotelPolicy from "./HotelPolicy";
import ContactUs from "./ContactUs";
import Title from "./Title";
import CheckinCheckout from "./CheckinCheckout";
import GuestRoom from "./GuestRoom";
import PriceTotal from "./PriceTotal";
import BookButton from "./BookButton";
import BookForm from "./BookForm";
import { setHotel, THotel } from "@/redux/features/hotelDetailSlice";
import { useAppDispatch } from "@/redux/store/hook";

type Props = {
  data: THotel;
  hotel_id: string
};

export default function HotelDetailsAndBookingForm({ data, hotel_id }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setHotel(data));
    }
  }, []);
  return (
    <div className="wrapper mt-24">
      <div className="flex gap-5">
        <div className="flex-1">
          <Photos />
        </div>
        <div className="p-4 overflow-y-auto bg-white rounded-lg shadow-md sticky top-24 border-2 w-[350px] h-[450px]">
          <Title />
          <CheckinCheckout />
          <GuestRoom />
          <PriceTotal />
          <BookButton hotel_id={hotel_id}/>
        </div>
      </div>
      <HotelHeader />
      <Description />
      <HotelPolicy />
      <ContactUs />
    </div>
  );
}
