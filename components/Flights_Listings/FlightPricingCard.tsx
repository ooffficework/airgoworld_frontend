"use client";
import { BsClock } from "react-icons/bs";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import CabinClassList from "./CabinClassList";
import { TFlight } from "./type";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { setDropdown } from "@/redux/features/flightDropdown";
import store from 'store';

type Props = {
  data: TFlight;
  track: number;
};

export default function FlightPricingCard({ data, track }: Props) {
  const dispatch = useAppDispatch();
  const value = useAppSelector((store) => store.dropdown.value);
  const flightStore = store.get('flightStore') || {};
  return (
    <div className="" onClick={() => dispatch(setDropdown(track))}>
      <div className="p-5 shadow-md bg-white grid grid-cols-[1fr_1.75fr]">
        <div className="">
          <div className="flex text-2xl items-center gap-8 font-semibold">
            <p>
              {data?.departure_date?.slice(11, 16)} {data?.origin?.iata}
            </p>
            <MdOutlineAirplanemodeActive className="rotate-90" />
            <p>
              {data?.arrival_date.slice(11, 16)} {data?.destination?.iata}
            </p>
          </div>
          <div className="flex capitalize font-semibold items-center gap-3 mt-2">
            <p>{data?.airline?.name}</p>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <BsClock />
            <p>
              {Number(data?.flight_duration?.slice(0, 2))}h{" "}
              {Number(data?.flight_duration?.slice(3, 5)) === 0
                ? ""
                : `${Number(data?.flight_duration?.slice(3, 5))}m`}{" "}
            </p>
          </div>
        </div>
        <div
          className={`grid grid-cols-4 py-2 gap-4 ${value === track && "opacity-0"} duration-500`}
        >
          {data?.cabin.map((el, key) => (
            <button
              key={key}
              className="flex bg-emerald-800 rounded text-white shadow-md justify-center items-center flex-col gap-1"
            >
              <span className="text-base font-normal uppercase">{el.name}</span>
              <span className="text-lg font-semibold">
                ${flightStore.tripType === 'round' ? Number(el?.prices?.adult) * 2 : Number(el?.prices?.adult)}
              </span>
            </button>
          ))}
        </div>
      </div>
      <CabinClassList
        track={track}
        airline={data?.airline?.name}
        data={data?.cabin}
        flight_duration={data?.flight_duration}
      />
    </div>
  );
}
