import axiosInstance from "@/components/Auth/axiosInstance";
import BookForm from "@/components/Hotel/BookForm";
import BookingPhoto from "@/components/Hotel/BookingPhoto";
import HotelHeader from "@/components/Hotel/HotelHeader";
import Framer from "@/components/Shared/Framer";
import React from "react";
import { BsStarFill } from "react-icons/bs";

type Params = {
  searchParams: Promise<{
    hotel_id: string;
  }>;
};

export default async function page({ searchParams }: Params) {
  const { hotel_id } = await searchParams
  let data;
  if (hotel_id) {
    try {
      const response = await axiosInstance(`/hotel/details/${hotel_id}/`);
      data = response.data.data;
    } catch (error) {
      return (
        <div className="h-screen grid place-content-center">
          <p className="text-3xl font-semibold">Something Went Wrong</p>
        </div>
      );
    }
  }
  return (
    <Framer>
      <div className="wrapper mt-28">
        <div className="flex justify-between items-center">
          <HotelHeader />
          <div className="flex font-semibold">
            <p>
              {data.rating} <BsStarFill className="text-yellow-600 inline-block ml-3" />
            </p>
          </div>
        </div>
        <div className=" mt-4 grid grid-cols-[auto_1fr] gap-5">
          <BookForm />
          <div className="flex-1 h-full ">
            <BookingPhoto />
          </div>
        </div>
      </div>
    </Framer>
  );
}
