import React from "react";
import FlightPricingCard from "./FlightPricingCard";
import { TFlight } from "./type";

type Props = {
  data: TFlight[];
  
};
export default function FlightPricingList({ data }: Props) {
  return (
    <div className="flex flex-col mt-7 wrapper gap-5">
      {data?.map((el, key) => (
        <FlightPricingCard track={key} data={el} key={key} />
      ))}
    </div>
  );
}
