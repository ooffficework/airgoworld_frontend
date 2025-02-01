'use client'
import { useAppSelector } from "@/redux/store/hook";
import { TiLocationOutline } from "react-icons/ti";


export default function HotelHeader() {
  const store = useAppSelector(store => store.hotelDetails.hotel)

  return (
    <div className="mt-3">
      <p className="text-2xl mt-5 font-semibold mb-2">{store?.name}</p>
      <div className="flex items-center gap-1">
        <TiLocationOutline className="text-lg "/>
        <p className="text-[15px] font-medium ">
          {store?.address} {store?.state} {store?.country}
        </p>
      </div>
    </div>
  );
}
