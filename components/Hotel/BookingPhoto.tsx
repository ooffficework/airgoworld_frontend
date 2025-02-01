"use client";
import { useAppSelector } from "@/redux/store/hook";

export default function BookingPhoto() {
  const store = useAppSelector((store) => store.hotelDetails.hotel);
  return (
    <div className="h-full relative w-full overflow-hidden rounded-lg shadow-md">
      {store &&
        store.images &&
        store.images.length > 0 && (
          <img
            src={store?.images[0].image}
            className="h-full rounded-lg w-full absolute object-cover top-0 left-0"
            alt=""
          />
        )}
    </div>
  );
}
