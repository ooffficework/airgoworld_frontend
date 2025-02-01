'use client'
import { TFlight } from "@/components/Home/Flights/type";
import { setTopNavTitle } from "@/redux/features/admin";
import { useAppDispatch } from "@/redux/store/hook";
import Link from "next/link";
import React from "react";
import { FaPlane } from "react-icons/fa";

type Props = {
  data: TFlight[];
};

export default function Manage({ data }: Props) {
  const dispatch = useAppDispatch()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 p-5">
      {data.map((el: any) => (
        <div onClick={() => dispatch(setTopNavTitle('Update Flight'))} className="rounded-3xl p-5 relative shadow-md bg-gradient-to-b text-white from-blue-800  to-blue-950">
          <Link
            href={`/admin/flight/update?id=${el.id}`}
            className=" absolute top-0 left-0 h-full w-full"
          ></Link>
          <div className="flex uppercase text-lg font-semibold items-center mb-3  justify-between">
            <p>{el.origin.city}</p>
            <FaPlane />
            <p>{el.destination.city}</p>
          </div>
          <div className="">
            <p className="font-medium uppercase text-center translate-x-3 text-base">{el.airline.name}</p>
            <div className="flex mt-2 mb-3 justify-between">
              <p className=" text-sm ">
                {el.departure_date.slice(0, 10)}
              </p>
              <p className=" text-sm ">
                {el.departure_date.slice(11, 16)}
              </p>
            </div>

            <div className="capitalize grid-cols-2 gap-3 mt-5 grid">
              {el.cabin.map((ell: any) => (
                <div className="">
                  <p className="text-sm mb-1 uppercase">{ell.name}</p>
                  <p className="font-semibold">
                    ${ell.prices.adult.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
