"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import LocationDropdownCard from "../Home/Search/LocationDropdownCard";
import { DateComponent } from "../Home/Search/DateComponent";
import { useState } from "react";
import TravelerRoom from "./TravelerRoom";
import Button from "../Admin/General/Button";
import axiosInstance from "../Auth/axiosInstance";
import { setError } from "@/redux/features/hotelBookingSlice";

export default function HotelSearchForm() {
  const values = useAppSelector((store) => store.hotelBooking.values);
  const errors = useAppSelector((store) => store.hotelBooking.errors);
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const dispatch = useAppDispatch()
  const submit = async () => {
    if(values.location ){
      return dispatch(setError({location: 'Location cannot be empty'}))
    }
    const response = await axiosInstance.post(`/flight/search`, {
      location: values.location,
    });
  };

  return (
    <div className="flex gap-5 relative z-[1000] items-center wrapper mt-28 shadow-md rounded-lg p-8  bg-white">
      <div className="wrapper flex-1 gap-2 grid grid-cols-4">
        <LocationDropdownCard
          type="hotel"
          error={errors.location}
          label="Search Location"
          name="location"
          opened={opened}
          placeholder="Search City"
          setOpened={setOpened}
          value={values.location}
        />
        <DateComponent
          error={errors.checkIn}
          label="Check In "
          name="checkIn"
          placeholder="Check In Date"
          type="hotel"
        />
        <DateComponent
          error={errors.checkOut}
          label="Check Out "
          name="checkOut"
          placeholder="Check Out Date"
          type="hotel"
        />
        <TravelerRoom />
      </div>
      <div className=""></div>
      <Button submit={submit} title="Search" loading={loading} />
    </div>
  );
}
