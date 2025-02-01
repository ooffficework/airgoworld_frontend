"use client";
import React, { useEffect, useState } from "react";
import Hotel from "./Hotel";
import axiosInstance from "../Auth/axiosInstance";

type Props = {
  page?: boolean
}

export default function HotelList({page}: Props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/hotel/all/");
      const data = response.data;
      setData(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (key: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.75,
          delay: key * 0.5,
        },
      };
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-auto mb-5 lg:mt-0 px-3 xl:px-0 wrapper z-20 relative">
      <div className="flex justify-between items-center">
        <p className="title mb-5 ">Our Hotels</p>
        {page && <p className="text-sm font-semibold text-blue-500">Show More</p>}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {data?.map((el, key) => (
          <Hotel key={key} data={el} />
        ))}
      </div>
    </div>
  );
}
