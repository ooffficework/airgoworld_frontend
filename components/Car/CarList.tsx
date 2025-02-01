"use client";
import Car from "./Car";
import axiosInstance from "../Auth/axiosInstance";
import { useEffect, useState } from "react";

export type TCar = {
  id: number; // Assuming Django auto-generates an ID
  name: string;
  transmission: "automatic" | "manual"; // Adjust based on TRANSMISSION_CHOICES
  car_type: "sedan" | "suv" | "truck" | "coupe"; // Adjust based on CAR_TYPE_CHOICES
  rental_price: number;
  speed: number; // DecimalField likely serialized as a float
  images?: string[] | null; // JSONField, can be an array of URLs or null
  available: boolean;
  display: boolean;
  fuel_type: string;
  active: boolean;
  capacity: number;
  year: number;
  created_at: string; // ISO 8601 date string (e.g., "2025-01-30T12:34:56Z")
  updated_at: string;
};


export default function CarList() {
  const [data, setData] = useState<TCar[]>([]);

  const fetchCars = async () => {
    try {
      const response = await axiosInstance.get("/car/all/");
      const data: TCar[] = response.data;
      setData(data);
    } catch (error: any) {
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="wrapper px-3 xl:px-0 pb-10">
      <p className="title mb-5">Cars </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {data?.map((el: any, key: number) => (
          <Car data={el} key={key} />
        ))}
      </div>
    </div>
  );
}
