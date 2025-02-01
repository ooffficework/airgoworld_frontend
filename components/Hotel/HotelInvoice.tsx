"use client";
import React, { useRef } from "react";
import { differenceInDays } from "date-fns"; // To calculate days difference
import { format } from "date-fns"; // To format dates
import { TBookingDetails } from "./type";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type Props = {
  data: TBookingDetails;
};

export default function HotelInvoice({ data }: Props) {
  if (!data) return null;
  const bookingDetails = data;

  const {
    fullname,
    email,
    phone,
    gender,
    booked_at,
    check_in_date,
    check_out_date,
    no_of_rooms,
    occupants,
    hotel,
    price,
  } = bookingDetails;

  const formattedBookedAt = format(new Date(booked_at), "MMMM dd, yyyy");
  const formattedCheckIn = format(new Date(check_in_date), "MMMM dd, yyyy");
  const formattedCheckOut = format(new Date(check_out_date), "MMMM dd, yyyy");
  const invoiceRef = useRef<HTMLDivElement>(null);

  const saveAsPdf = async () => {
    if (!invoiceRef.current) return;
    const canvas = await html2canvas(invoiceRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("invoice.pdf");
  };

  return (
    <div className="wrapper mt-32 ">
      <div className="flex flex-col max-w-3xl justify-center mb-3 mx-auto">
        <div className="flex w-full justify-center mt-5 mb-3 mx-auto">
          <button
            onClick={saveAsPdf}
            className="px-9 py-4 uppercase text-sm duration-300 active:scale-95 bg-blue-500 rounded-md shadow-md text-white font-semibold"
          >
            Save Invoice
          </button>
        </div>
        <div
          ref={invoiceRef}
          className="w-full mx-auto p-5 bg-white shadow-lg rounded-lg"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-semibold uppercase mb-2">Invoice</h1>
            <p className="text-sm">
              Booking Reference:{" "}
              <span className="font-semibold">{hotel?.name || "N/A"}</span>
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-blue-600">
              Customer Information
            </h2>
            <div className="flex flex-col gap-2.5 mt-2 text-sm">
              <p>
                <span className="font-medium">Full Name:</span> {fullname}
              </p>
              <p>
                <span className="font-medium">Email:</span> {email}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {phone}
              </p>
              <p>
                <span className="font-medium">Gender:</span> {gender}
              </p>
              <p>
                <span className="font-medium">Booking Date:</span>{" "}
                {formattedBookedAt}
              </p>
              <p>
                <span className="font-medium">Check-In Date:</span>{" "}
                {formattedCheckIn}
              </p>
              <p>
                <span className="font-medium">Check-Out Date:</span>{" "}
                {formattedCheckOut}
              </p>
              <p>
                <span className="font-medium">Occupants:</span> {occupants}
              </p>
              <p>
                <span className="font-medium">Rooms:</span> {no_of_rooms}
              </p>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-blue-600">
              Hotel Details
            </h2>
            <div className="text-sm flex mt-2 flex-col gap-2.5">
              <p>
                <span className="font-medium">Hotel Name:</span> {hotel?.name}
              </p>
              <p>
                <span className="font-medium">Address:</span> {hotel?.address},{" "}
                {hotel?.state}, {hotel?.country}
              </p>
              <p>
                <span className="font-medium">Description:</span>{" "}
                {hotel?.description}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg text-blue-600 font-semibold">
              Pricing Details
            </h2>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <p>
                  <span className="font-medium">Price Per Night:</span>
                </p>
                <p className="font-semibold">${hotel.price_per_night}</p>
              </div>
              <div className="flex mb-3 justify-between">
                <p>
                  <span className="font-medium">Total Nights:</span>
                </p>
                <p className="font-semibold">
                  {differenceInDays(
                    new Date(check_out_date),
                    new Date(check_in_date)
                  )}
                </p>
              </div>
              <div className="flex justify-between text-lg border-t-2 border-gray-200 pt-2">
                <p>
                  <span className="font-medium">Total Price:</span>
                </p>
                <p className="font-bold">${Number(price).toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} AirgoWorld</p>
          </div>
        </div>
      </div>
    </div>
  );
}
