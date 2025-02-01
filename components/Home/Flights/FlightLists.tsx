"use client";
import Flight from "./Flight";
import { TFlight } from "./type";
import axiosInstance from "@/components/Auth/axiosInstance";
import { useEffect, useState } from "react";

export default function FlightList() {
  const [data, setData] = useState<TFlight[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loadData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/flight/all/`);
      const data: TFlight[] = response.data;
      setData(data);
    } catch (error: any) {
      setError(error.message);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="wrapper px-3 xl:px-0 py-20">
      <p className="title mb-5">Flights</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.map((el: TFlight, key: number) => (
          <Flight data={el} key={key} track={key} />
        ))}
      </div>
    </div>
  );
}
