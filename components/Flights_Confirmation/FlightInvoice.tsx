"use client";
import React, { useRef } from "react";
import { TBooking } from "./type";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import store from 'store'
type Props = {
  data: TBooking;
};

export const FlightInvoice = ({ data }: Props) => {
  const bookingDetails = {
    passengerName: data.fullname,
    leadPassenger: true,
    flightNumber: data.flight.flight_number,
    airline: data.flight.airline.name,
    origin: `${data.flight.origin.name} (${data.flight.origin.iata})`,
    destination: `${data.flight.destination.name} (${data.flight.destination.iata})`,
    departureTime: data.flight.departure_date,
    arrivalTime: data.flight.arrival_date,
    ticketPrice: data.amount,
    numberOfAdults: data.adults,
    numberOfChildren: data.children,
    numberOfInfants: data.infants,
    taxPercentage: 10,
    bookingDate: data.booking_date,
    cabinClass: data.cabin.name,
    invoiceNumber: data.invoice_number,
    totalPassengers: data.adults + data.children + data.infants,
    flightDuration: data.flight.flight_duration,
    paymentStatus: data.payment_status,
    currency: data.currency,
  };

  const {
    passengerName,
    leadPassenger,
    flightNumber,
    airline,
    origin,
    destination,
    departureTime,
    arrivalTime,
    bookingDate,
    cabinClass,
    invoiceNumber,
    totalPassengers,
    flightDuration,
    paymentStatus,
  } = bookingDetails;
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

  const flightStore = store.get('flightStore') || {}
  return (
    <div className="">
      <div className="flex max-w-3xl justify-center mt-5 mb-3 mx-auto">
        <button
          onClick={saveAsPdf}
          className="px-9 py-4 uppercase text-sm duration-300 active:scale-95 bg-blue-500 rounded-md shadow-md text-white font-semibold"
        >
          Save Invoice
        </button>
      </div>
      <div
        ref={invoiceRef}
        style={{
          padding: "20px",
          margin: "0 auto",
          background: "#fff",
          width: "210mm",
          minHeight: "297mm",
        }}
        className="wrapper mt-10 text-sm bg-blue-50 py-20"
      >
        <div className="max-w-3xl mx-auto p-4  border-blue-500 bg-white rounded-sm">
          <div className="flex justify-center flex-col items-center mb-6">
            <img
              src="https://airgoworld.net/uploads/global/logo.png"
              alt="AirgoWorld Logo"
              className=" h-20 mr-3"
            />
            <h1 className="text-[30px] font-bold text-blue-600">AIRGOWORLD</h1>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-6 rounded-lg text-center text-white mb-8 shadow-lg">
            <h1 className="text-2xl font-semibold mb-2">✈️ FLIGHT INVOICE</h1>
            <p className="text-lg italic">
              Your travel details at a glance. Safe travels!
            </p>
          </div>

          <div className="mb-8 p-6 bg-white rounded-lg  shadow-sm">
            <h3 className="title2">Invoice Details</h3>
            <div className="space-y-2">
              <p>
                <span>Invoice Number:</span>{" "}
                <span className="font-semibold">{invoiceNumber}</span>
              </p>
              <p>
                <span>Booking Date:</span>{" "}
                <span className="font-semibold">
                  {new Date(bookingDate).toLocaleDateString()}
                </span>
              </p>
              <p>
                <span>Class of Travel:</span>{" "}
                <span className="font-semibold uppercase">
                  {cabinClass} Class
                </span>
              </p>
            </div>
          </div>

          <div className="mb-8 p-6 bg-white rounded-lg  shadow-sm">
            <h3 className="title2">Passenger Information</h3>
            <div className="space-y-2">
              <p>
                <span>Lead Passenger Name:</span>{" "}
                <span className="font-semibold">
                  {leadPassenger ? `${passengerName}` : passengerName}
                </span>
              </p>
              <p>
                <span>Total Passengers:</span>{" "}
                <span className="font-semibold">{totalPassengers}</span>
              </p>
              <p>
                <span>Airline:</span>{" "}
                <span className="font-semibold">{airline}</span>
              </p>
              <p>
                <span>Flight Number:</span>{" "}
                <span className="font-semibold">{flightNumber}</span>
              </p>
            </div>
          </div>

          <div className="mb-8 p-6 bg-white rounded-lg  shadow-sm">
            <h3 className="title2">Flight Details</h3>
            <div className="space-y-2">
              <p>
                <span>Origin:</span>{" "}
                <span className="font-semibold">{origin}</span>
              </p>
              <p>
                <span>Destination:</span>{" "}
                <span className="font-semibold">{destination}</span>
              </p>
              <p>
                <span>Departure Time:</span>{" "}
                <span className="font-semibold">
                  {new Date(departureTime).toLocaleString()}
                </span>
              </p>
              <p>
                <span>Arrival Time:</span>{" "}
                <span className="font-semibold">
                  {new Date(arrivalTime).toLocaleString()}
                </span>
              </p>
              <p>
                <span>Duration:</span>{" "}
                <span className="font-semibold">{flightDuration}</span>
              </p>
            </div>
          </div>

          <div className="mb-8 p-6 bg-white rounded-lg  shadow-sm">
            <h3 className="title2">Payment Details</h3>
            <div className="space-y-2">
              <p>
                <span>Payment Status:</span>{" "}
                <span className="font-semibold capitalize text-yellow-500">
                  {paymentStatus}
                </span>
              </p>
              <p>
                <span>Currency:</span>{" "}
                <span className="font-semibold">USD</span>
              </p>
              <p>
                <span>Adult Price:</span>{" "}
                <span className="font-semibold">
                  $
                  {flightStore.tripType === "round"
                    ? (Number(data.cabin.prices.adult) * 2).toLocaleString()
                    : Number(data.cabin.prices.adult).toLocaleString()}{" "}
                  [{data.adults}]
                </span>
              </p>
              {data.children !== 0 && (
                <p>
                  <span>Children Price:</span>{" "}
                  <span className="font-semibold">
                    $
                    {flightStore.tripType === "round"
                      ? (
                          Number(data.cabin.prices.children) * 2
                        ).toLocaleString()
                      : Number(
                          data.cabin.prices.children
                        ).toLocaleString()}{" "}
                    [{data.children}]
                  </span>
                </p>
              )}
              {data.infants !== 0 && (
                <p>
                  <span>Infants Price:</span>{" "}
                  <span className="font-semibold">
                    $
                    {flightStore.tripType === "round"
                      ? (Number(data.cabin.prices.infant) * 2).toLocaleString()
                      : Number(data.cabin.prices.infant).toLocaleString()}{" "}
                    [{data.infants}]
                  </span>
                </p>
              )}
              <p className="text-lg mt-4 text-blue-600">
                <span>Total Amount:</span>{" "}
                <span className="font-semibold">
                  ${Number(data.amount).toLocaleString()}
                </span>
              </p>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-600">
            <p>Thank you for booking with us!</p>
            <p>
              For any inquiries, contact our support team at{" "}
              <span className="text-cyan-500 underline">
                support@flights.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
