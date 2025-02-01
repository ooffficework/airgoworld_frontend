import Link from "next/link";
import { BsStarFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

type Props  ={
  hotel: any
}

export default function HotelListItem({hotel}: Props) {
  return (
    <div className="flex gap-3 relative">
      <Link className="h-full w-full absolute top-0 left-0" href={`/hotels/details?hotel_id=${hotel.id}`}></Link>
      <div className="h-44 w-60 rounded-md border-2"></div>
      <div className="flex flex-col flex-1 justify-between py-2 gap-2">
        <div className="flex justify-between">
          <p className="px-4 py-2 bg-pink-600 text-white rounded shadow-md w-fit text-xs">Popular</p>
          <div className="flex items-center">
            <GoLocation className="text-red-500"/>
            <p className="font-semibold text-sm ml-1">{hotel.city || hotel.state}</p>
          </div>
        </div>
        <p className="text-xl font-semibold">
          {hotel.name}
        </p>
        <div className="flex text-sm gap-3 items-center text-gray-500">
          <p>AC</p>
          <div className="h-[4px] w-[4px] bg-gray-500 rounded-full"></div>
          <p>Smoking Area</p>
          <div className="h-[4px] w-[4px] bg-gray-500 rounded-full"></div>
          <p>24/7</p>
          <div className="h-[4px] w-[4px] bg-gray-500 rounded-full"></div>
          <p>Meeting Room</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex text-sm gap-2">
            {[1, 2, 3, 4, 5].map(() => (
              <BsStarFill className="text-yellow-500" />
            ))}
          </div>
          <p className="text-gray-500"><span className="text-blue-600 text-xl font-bold">${hotel.price_per_night} </span>/ night</p>
        </div>
      </div>
    </div>
  );
}
