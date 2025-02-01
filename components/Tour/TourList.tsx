"use client";
import Tour from "./Tour";
import axiosInstance from "../Auth/axiosInstance";
import { useEffect, useState } from "react";

export default function TourList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState<any>(false);

  const fetchCars = async () => {
    try {
      const response = await axiosInstance.get("/tours/all/");
      const data = response.data;
      setData(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);
  return (
    <div className="wrapper px-3 xl:px-0 mt-24 pb-10">
      <p className="title mb-5">Tours </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.map((el: any, key: number) => (
          <Tour data={el} key={key} track={key} />
        ))}
      </div>
    </div>
  );
}
