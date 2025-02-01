"use client";
import React, { useState } from "react";
import Input from "@/components/Shared/Input";
import Button from "../General/Button";
import Select from "@/components/Shared/Select";
import axiosInstance from "@/components/Auth/axiosInstance";
import { useRouter } from "next/navigation";

type TSelect = {
  label: string;
  value: string | number;
};

type Props = {
  airports: TSelect[];
  airlines: TSelect[];
};

export default function CreateFlight({ airports, airlines }: Props) {
  const [flightData, setFlightData] = useState({
    economy: "",
    business: "",
    first: "",
    vip: "",
    trip_type: "one_way", // Default value
    departure_time: "",
    duration: "",
    departure_date: "",
    airline: "",
    origin: "",
    destination: "",
  });

  const [errors, setErrors] = useState({
    economy: "",
    business: "",
    first: "",
    vip: "",
    departure_time: "",
    duration: "",
    departure_date: "",
    airline: "",
    trip_type: "",
    origin: "",
    destination: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFlightData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!flightData.economy) newErrors.economy = "Economy price is required";
    if (!flightData.business) newErrors.business = "Business price is required";
    if (!flightData.first) newErrors.first = "First class price is required";
    if (!flightData.vip) newErrors.vip = "VIP price is required";
    if (!flightData.departure_time)
      newErrors.departure_time = "Departure time is required";
    if (!flightData.duration) newErrors.duration = "Duration is required";
    if (!flightData.departure_date)
      newErrors.departure_date = "Departure date is required";
    if (!flightData.airline) newErrors.airline = "Airline is required";
    if (!flightData.origin) newErrors.origin = "Origin is required";
    if (!flightData.destination)
      newErrors.destination = "Destination is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        setLoading(true);
        const response = await axiosInstance.post(
          "/flight/create/",
          flightData
        );
        const data = await response.data;
        router.push("/admin/flight/manage");
        console.log(data);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="p-4 flex flex-col justify-between flex-1 ">
      <div className="">
        <div className="grid grid-cols-3 gap-5 ">
          <Input
            label="Economy Price"
            name="economy"
            value={flightData.economy}
            onChange={handleInputChange}
            error={errors.economy}
          />

          <Input
            label="Business Price"
            name="business"
            value={flightData.business}
            onChange={handleInputChange}
            error={errors.business}
          />

          <Input
            label="First Class Price"
            name="first"
            value={flightData.first}
            onChange={handleInputChange}
            error={errors.first}
          />

          <Input
            label="VIP Price"
            name="vip"
            value={flightData.vip}
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
      </div>
      <div className="flex justify-end">
        <Button submit={handleSubmit} title="Create Flight" loading={loading} />
      </div>
    </div>
  );
}
