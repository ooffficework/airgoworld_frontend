"use client";
import { BiCheck } from "react-icons/bi";
import { TBooking } from "./type";

type Props = {
  data: TBooking
}

export default function Confirmation({data}: Props) {
  const date = new Date(data.booking_date);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="wrapper pt-24 flex px-3 lg:px-20 flex-col items-center text-center">
      <div className="h-14 w-14 md:h-16 md:w-16 mb-3 rounded-full grid border-2 border-blue-500 place-content-center bg-emerald-100 ">
        <BiCheck className="text-green-500 text-3xl lg:text-4xl stroke-1" />
      </div>
      <p className="text-xl md:text-2xl font-bold mb-5">Booking Confirmation</p>
      <p className=" text-sm text-gray-800">
        Thank you <b className="text-black">{data.fullname}</b>, your
        booking order will be processed soon.
      </p>
      <p className="md:w-[500px] w-full text-sm mb-7 text-gray-800">
        An email has been sent to you as a confirmation of this flight booking.
        You will be contacted soon by our agent as your booking is being
        processed.
      </p>
      <div className="grid w-full mb-10 uppercase gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <p className="px-8 py-3 shadow-md rounded-md border-2 flex flex-col border-dashed bg-blue-200 border-blue-300">
          <span>BOOKING ID: </span>
          <b>{data.booking_id}</b>
        </p>
        <p className="px-3 py-3 shadow-md rounded-md border-2 border-dashed flex flex-col bg-blue-200 border-blue-300">
          <span>PNR:</span>
          <b>{data.pnr}</b>
        </p>
        <p className="px-3 py-3 shadow-md rounded-md border-2 border-dashed flex flex-col bg-blue-200 border-blue-300">
          <span>BOOKING DATE</span>
          <b>{formattedDate}</b>
        </p>
        <p className="px-8 py-3 shadow-md rounded-md border-2 border-dashed flex flex-col bg-blue-200 border-blue-300">
          <span>BOOKING STATUS</span>
          <b>PENDING</b>
        </p>
      </div>
    </div>
  );
}
