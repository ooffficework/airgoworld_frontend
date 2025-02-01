'use client'
import { LuPlane } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

type Props = {
  airport: { name: string; iata: string };
  type?: string;
  onSelect: () => void;
};

export default function AirportListItem({ airport, type, onSelect }: Props) {
  return (
    <div
      onClick={onSelect}
      className="flex p-4 group cursor-pointer duration-500 items-center gap-2"
    >
      {type === "hotel" ? (
        <GrLocation className="group-hover:rotate-45 group-hover:text-blue-500 duration-200" />
      ) : (
        <LuPlane size={20} className="group-hover:rotate-45 group-hover:text-blue-500 duration-200" />
      )}
      <div className="group-hover:translate-x-1 text-sm duration-500">
        <div className="capitalize font-semibold">{airport.name}</div>
        {type !== "hotel" && <p className="uppercase">{airport.iata}</p>}
      </div>
    </div>
  );
}
