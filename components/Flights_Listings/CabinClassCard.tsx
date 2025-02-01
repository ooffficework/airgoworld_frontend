'use client'

import Link from "next/link";
import React from "react";
import { TCabin } from "./type";
import { useAppSelector } from "@/redux/store/hook";
import store from "store";

type Props = {
  data: TCabin;
  flight_duration: string;
  airline: string;
};

export default function CabinClassCard({
  data,
  flight_duration,
  airline,
}: Props) {
  const flightStore = store.get("flightStore") || {};
  const storeData = {
    ...flightStore,
    cabinClass: data.name,
    cabinId: data.id,
    flightDuration: flight_duration,
    airline: airline,
  };

  const setCookie = () => {
    store.set("flightStore", storeData);
  };

  const price =
    flightStore.tripType === "round"
      ? Number(data.prices.adult) * 2
      : Number(data.prices.adult);
  return (
    <div>
      <div className="flex flex-col justify-between border-2 ">
        <div className="">
          <div className="h-16 flex items-center text-white justify-between px-5 bg-cyan-950">
            <p className="text-lg uppercase">{data.name}</p>
            <p className="text-xl font-semibold">${price.toLocaleString()}</p>
          </div>
          <div className="p-3 flex flex-col gap-3">
            {data.amenities.map((el) => (
              <div className="flex text-[15px] font-medium text-gray-800 justify-between gap-3">
                <p>{el}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 ">
          <Link
            onClick={setCookie}
            href={`/flights/review?cabin_class=${data.name}&flight=${data.flight}`}
            className="py-4 w-full font-semibold text-white bg-blue-800 grid place-content-center rounded"
          >
            Select
          </Link>
        </div>
      </div>
    </div>
  );
}
