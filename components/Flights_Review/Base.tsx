"use client";
import { TFlight } from "../Flights_Listings/type";
import Price from "./Price";
import Title from "./Title";
import store from "store";
import { useAppSelector } from "@/redux/store/hook";

type Props = {
  data: TFlight;
  flight: string;
};

export default function Base({ data, flight }: Props) {
  const values = store.get('flightStore') || {};
  store.set("flightStore", { ...values, flight });
  return (
    <div className="mt-24">
      <Title data={data} />
      <Price data={data} />
    </div>
  );
}
