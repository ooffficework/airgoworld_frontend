"use client"
import { useAppSelector } from "@/redux/store/hook";
import { differenceInDays } from "date-fns";

export default function PriceTotal() {
  const hotel = useAppSelector((store) => store.hotelDetails.hotel);
  const values = useAppSelector((store) => store.hotelBooking.values);

  // Ensure hotel is available before proceeding with calculations
  if (!hotel) return null;

  const price_per_night = Number(hotel.price_per_night);
  const days = differenceInDays(new Date(values.checkOut), new Date(values.checkIn));
  const validDays = Math.max(days, 1); // Ensure at least 1 day is considered
  const total = values.rooms * price_per_night * validDays;
  const displayAmount = isNaN(total) ? price_per_night : total;

  return (
    <div className="mt-3">
      <div className="flex justify-between items-center">
        <p className="text-[15px]">Price Per Night</p>
        <p className="font-semibold">${price_per_night.toLocaleString()}</p>
      </div>

      {days > 0 && (
        <div className="flex mt-2 justify-between items-center">
          <p className="text-[15px]">Nights</p>
          <p className="font-semibold">{days}</p>
        </div>
      )}

      <div className="flex justify-between mt-5 items-center">
        <p className="text-[15px]">Total</p>
        <p className="font-semibold">${displayAmount.toLocaleString()}</p>
      </div>
    </div>
  );
}
