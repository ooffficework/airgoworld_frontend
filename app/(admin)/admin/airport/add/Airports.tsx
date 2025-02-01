import React from "react";
import { TAirport } from "../manage/page";

type Props = {
  data: TAirport[];
};

export default function Airports({ data }: Props) {
  return (
    <div className="grid p-3 grid-cols-3 gap-5">
      {data?.map((el, key) => (
        <div className="  border-2 rounded-2xl bg-white text-sm p-5 items-center gap-3 justify-between" key={key}>
          <p className="font-semibold mb-3">{el.name}</p>
          <p className="mb-1">{el.city}</p>
          <p>{el.country}</p>
        </div>
      ))}
    </div>
  );
}
