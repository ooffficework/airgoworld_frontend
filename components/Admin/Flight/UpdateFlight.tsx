"use client";
import React, { useEffect, useState } from "react";
import Input from "@/components/Shared/Input";
import Button from "../General/Button";
import Select from "@/components/Shared/Select";
import axiosInstance from "@/components/Auth/axiosInstance";
import { TFlight, TFlight2 } from "@/components/Home/Flights/type";

type TSelect = {
  label: string;
  value: string | number;
};

type Props = {
  airports: TSelect[];
  airlines: TSelect[];
  flight: TFlight;
};

export default function UpdateFlight({ airports, airlines, flight }: Props) {
  const [flightData, setFlightData] = useState<TFlight2>({
    economy: "",
    business: "",
    first: "",
    vip: "",
    departure_time: "",
    duration: "",
    departure_date: "",
    airline: "",
    origin: "",
    destination: "",
  });

  useEffect(() => {
    setFlightData({
      ...flightData,
      economy: flight.cabin[0].prices.adult,
      business: flight.cabin[1].prices.adult,
      first: flight.cabin[2].prices.adult,
      vip: flight.cabin[3].prices.adult,
      origin: flight.origin.id,
      airline: flight.id,
      destination: flight.destination.id,
      departure_date: flight.departure_date,
    });
  }, []);

  const [errors, setErrors] = useState({
    economy: "",
    business: "",
    first: "",
    vip: "",
    departure_time: "",
    duration: "",
    departure_date: "",
    airline: "",
    origin: "",
    destination: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFlightData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (flight.id) {
      try {
        setLoading(true);
        const response = await axiosInstance.put(
          `/flight/update/${flight.id}/`,
          flightData
        );
        const data = await response.data;
        console.log(data);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const TripTypeSelect = [
    {
      label: 'Round Trip',
      value: 'round'
    },
    {
      label: 'One Way',
      value: 'one_way'
    },
  ]


  return (
    <div className="p-4 ">
      <div className="grid grid-cols-3 gap-5 ">
        <Input
          label="Economy Price"
          name="economy"
          value={flightData.economy as string}
          onChange={handleInputChange}
          error={errors.economy}
        />

        <Input
          label="Business Price"
          name="business"
          value={flightData.business as string}
          onChange={handleInputChange}
          error={errors.business}
        />

        <Input
          label="First Class Price"
          name="first"
          value={flightData.first as string}
          onChange={handleInputChange}
          error={errors.first}
        />

        <Input
          label="VIP Price"
          name="vip"
          value={flightData.vip as string}
          onChange={handleInputChange}
          error={errors.vip}
        />

        <Input
          label="Departure Time"
          name="departure_time"
          value={flightData.departure_time}
          onChange={handleInputChange}
          error={errors.departure_time}
          type="time"
        />

        <Input
          label="Flight Duration"
          name="duration"
          value={flightData.duration}
          onChange={handleInputChange}
          error={errors.duration}
          type="text"
        />

        <Input
          label="Departure Date"
          name="departure_date"
          value={flightData.departure_date}
          onChange={handleInputChange}
          error={errors.departure_date}
          type="date"
        />

        <Select
          label="Airline"
          data={airlines}
          name="airline"
          value={flightData.airline}
          onChange={handleInputChange}
          error={errors.airline}
        />

        <Select
          label="Origin Airport"
          data={airports}
          name="origin"
          value={flightData.origin}
          onChange={handleInputChange}
          error={errors.origin}
        />

        <Select
          label="Destination Airport"
          name="destination"
          data={airports}
          value={flightData.destination}
          onChange={handleInputChange}
          error={errors.destination}
        />
      </div>
      <div className="flex justify-end">
        <Button submit={handleSubmit} title="Update Flight" loading={loading} />
      </div>
    </div>
  );
}
