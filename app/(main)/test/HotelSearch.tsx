"use client";
import TravelerRoom from "@/components/Hotel/TravelerRoom";
import HotelDate from "./HotelDate";
import SearchCity from "./SearchCity";
import Button from "@/components/Admin/General/Button";
import { useClickOutside } from "./useClickOutside";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store/hook";
import store from "store";

export default function HotelSearch() {
  const router = useRouter();
  const values = useAppSelector((store) => store.hotelBooking.values);
  const submit = () => {
    const dates = {
      checkIn: values.checkIn,
      checkOut: values.checkOut,
    };
    store.set("dates", dates);
    router.push(`/hotels/listings/?location=${values.location}`);
  };
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setIsOpen(false));

  return (
    <div className="p-7 bg-white shadow-md rounded-lg rounded-t-none wrapper grid lg:grid-cols-[1fr_1fr_1fr_1fr_.75fr] gap-2">
      <SearchCity
        dropdownRef={dropdownRef}
        setIsOpen={setIsOpen}
        open={isOpen}
      />
      <HotelDate placeholder="Check-In" />
      <HotelDate placeholder="Check-Out" />
      <TravelerRoom />
      <Button submit={submit} title="Search Hotels" width="100%" />
    </div>
  );
}
