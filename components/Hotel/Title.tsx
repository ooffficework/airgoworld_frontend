'use client'

import { useAppSelector } from "@/redux/store/hook"

export default function Title() {
  const store = useAppSelector(store => store.hotelDetails.hotel)
  return (
    <div className="flex border-b-2 justify-between items-center py-3">
      <p className="text-gray-600 text-sm"><b className="text-black text-base">${store?.price_per_night}</b> / Night </p>
      <p className="w-fit rounded-md shadow-md font-semibold px-6 py-3 bg-pink-500 text-white text-xs uppercase font-sans">20% Off</p>
    </div>
  )
}
