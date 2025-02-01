"use client";
import { RefObject } from "react";
import LocationCard from "./LocationCard";
import { useFetchLocation } from "./useFetchLocation";

type Props = {
    location: string
    dropdownRef: RefObject<HTMLElement | null> 
    open: boolean 
}

export default function LocationsDropdown({location, open, dropdownRef}: Props) {
  const {data, error, loading} = useFetchLocation(location)
  const setDropdownRef = (el: HTMLDivElement | null) => {
    if (dropdownRef) {
        dropdownRef.current = el;
    }
};
  return (
    <div ref={setDropdownRef} className={`h-56 rounded-lg ${open ? "opacity-100 visible translate-y-0" : "translate-y-7 invisible opacity-0"} overflow-y-auto duration-500 rounded-t-none ${loading && "grid place-content-center"} top-full left-0 absolute shadow-md w-full bg-white border-t-2`}>
      {loading && <span className="loader relative z-10"></span>}
      {error && <p className=" text-xs text-center">{error}</p>}
      <div className="flex flex-col gap-2 relative z-50">
        {Array.isArray(data) && data.length > 0
          ? data.map((el) => <LocationCard key={el.id} el={el} />)
          : !loading && <p className="text-center">No locations found</p>}
      </div>
    </div>
  );
}
