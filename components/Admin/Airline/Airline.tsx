import { TAirline } from "@/app/(admin)/admin/airline/manage/page";
import React from "react";

type Props = {
  data: TAirline[];
};

export default function Airline({ data }: Props) {
  return (
    <div className="grid flex-1 bg-emerald-700 p-3 grid-cols-3 gap-5">
      {data?.map((el, key) => (
        <div className="  border-2 rounded-2xl bg-white text-sm p-5 items-center gap-3 justify-between" key={key}>
          <p className="font-semibold mb-3">{el.name}</p>
          <p className="mb-1">{el.iata}</p>
          <p>{el.country}</p>
        </div>
      ))}
    </div>
  );
}
