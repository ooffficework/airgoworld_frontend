import { FaPlane } from "react-icons/fa";
import { TFlight } from "../Home/Flights/type";

type Props = {
    data: TFlight
}

export default function FlightCard({ data}: Props) {
const date = new Date(data.departure_date);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayName = days[date.getUTCDay()];
const day = date.getUTCDate();
const monthName = months[date.getUTCMonth()];
const hours = date.getUTCHours();
const minutes = date.getUTCMinutes().toString().padStart(2, "0");

const isPM = hours >= 12;
const formattedHours = hours % 12 || 12; 
const ampm = isPM ? "PM" : "AM";

const formattedDate = `${dayName} ${day} ${monthName} - ${formattedHours}:${minutes} ${ampm}`;

  return (
    <div className="p-5 rounded-2xl flex border-2  flex-col gap-3 shadow-md">
      <p className="uppercase text-[15px] font-semibold ">{data.airline.name}</p>
      <p className=" text-sm font-medium text-gray-600">{formattedDate}</p>
      <div className="flex justify-between border-gray-400 shadow-md p-5 border-2 rounded-full items-center text-xl font-semibold uppercase">
        <p className="text-rose-500 uppercase">{data.origin.city}</p>
        <FaPlane className="text-lg text-blue-500" />
        <p className="text-blue-500">{data.destination.city}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-bold">${data.cabin[0].prices.adult.toLocaleString()}</p>
        <p className="text-sm">Economy</p>
      </div>
    </div>
  );
}
