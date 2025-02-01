"use client";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { motion } from "framer-motion";
import store from 'store'
import Link from "next/link";

export type THotel = {
  id: number; // Assuming Django auto-generates an ID
  name: string;
  description: string;
  rating: number; // DecimalField, likely serialized as a float
  price_per_night: number;
  parking: boolean;
  images?: {
    image: string 
    id: number
  }[] | null; 
  restaurant: boolean;
  available: boolean;
  wifi: boolean;
  casino: boolean;
  active: boolean;
  address: string;
  state?: string; // Optional since blank=True
  city?: string | null; // Optional and can be null
  country: string;
  pool: boolean;
  spa: boolean;
  gym: boolean;
  bar: boolean;
  created_at: string; // ISO 8601 date string (e.g., "2025-01-30T12:34:56Z")
  updated_at: string;
};


type Props = {
  data: THotel;
};
const variants = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: (track: number) => {
    return {
      opacity: 1,
      height: "208px",
      transition: {
        duration: 0.5,
        delay: track * 0.005,
      },
    };
  },
};

export default function Hotel({ data }: Props) {
  const approxNumber = Math.floor(data.rating);
  const src = data && data.images && data.images.length > 0 ? data.images[0].image : 'https://i.pinimg.com/736x/80/0e/a6/800ea631af35a19dd878af02c9167e01.jpg';
  const result = Array.from({ length: approxNumber }).map((_, index) => {
    return `${index + 1}`;
  });
  return (
    <div className="">
      {data && (
        <div onClick={() => store.set('hotel_id',data.id)} className="border-2 relative overflow-hidden shadow-md rounded-lg">
          <Link href={`/hotels/details?hotel_id=${data.id}`} className="h-full w-full absolute top-0 left-0 "></Link>
          <div className="h-52 relative">
            <motion.img
              animate="animate"
              whileInView="visible"
              initial="initial"
              variants={variants}
              src={src}
              className="h-full w-full rounded-t-lg object-cover"
              alt=""
            />
            <div className="flex absolute top-3 left-3 gap-1 items-center">
              <div className="loader1"></div>
              <p className="text-green-500 font-medium text-xs">Available</p>
            </div>
          </div>
          <div className="p-2">
            <p className="text-sm   font-semibold">{data?.name}</p>
            <p className="w-full overflow-x-hidden text-ellipsis text-nowrap">
              <TiLocation color="red" className="inline-block mr-1" />
              <span className="text-[13px] font-semibold">{data?.address}</span>
              <span className="text-[13px] font-semibold ml-1 ">
                {data?.city}
              </span>
              <span className="text-[13px] font-semibold ml-1 ">
                {data?.country}
              </span>
            </p>
            <div className="flex items-center gap-3 text-xs">
              <div className="flex text-xs my-2 gap-2">
                {result.map(() => (
                  <BsStarFill className="text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="font-semibold mt-1 text-base">
              ${data?.price_per_night}
              <span className="font-medium text-xs">/ Night</span>
            </p>
            <p className="font-semibold w-full grid place-content-center px-5 py-3 cursor-pointer hover:bg-blue-600 active:scale-90 duration-500 mt-2 rounded-md shadow-md text-xs bg-blue-500 text-white">
              Book Now
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
