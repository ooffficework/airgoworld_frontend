"use client";
import { useAppSelector } from "@/redux/store/hook";
import CabinClassCard from "./CabinClassCard";
import { TCabin } from "./type";

type Props = {
  data: TCabin[];
  flight_duration: string;
  airline: string;
  track: number;
};

export default function CabinClassList({
  data,
  flight_duration,
  track,
  airline,
}: Props) {
  const value = useAppSelector((store) => store.dropdown.value);
  return (
    <div className={`${track === value ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} duration-500 grid `}>
      <div className={`grid wrapper overflow-hidden grid-cols-4 gap-2 `}>
        {data.map((el, key) => (
          <CabinClassCard
            airline={airline}
            flight_duration={flight_duration}
            data={el}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}
