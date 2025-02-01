"use client";
import React, { useState, useEffect } from "react";

export const HeroWriteUp = () => {
  const [time, setTime] = useState(10 * 3600 + 20 * 60 + 30); // Initialize with 10:20:30

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [time]);

  const formatTime = () => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${String(hrs).padStart(2, "0")} : ${String(mins).padStart(
      2,
      "0"
    )} : ${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col mx-auto mt-32 items-center relative z-30 justify-center mb-10 text-white">
      <h1 className=" leading-loose w-[600px] mx-auto lg:text-4xl font-semibold text-center">
        Explore Your Dream Destinations with Unbeatable Offers!
      </h1>
      <h2 className="text-xl font-semibold my-5">{formatTime()}</h2>
      <p className="px-5 lg:px-8 w-fit rounded-full border-2 text-white cursor-pointer font-semibold border-white py-3 lg:py-3">
        Book Now
      </p>
    </div>
  );
};
