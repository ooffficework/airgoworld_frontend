"use client";
import { BiSolidLocationPlus } from "react-icons/bi";
import { BiSolidMapPin } from "react-icons/bi";

type Props = {
  placeholder: string;
  label: string;
  value: string;
  name: string;
  onChange: (e: any) => void
};

export default function SearchCard({ value, placeholder, label, onChange, name }: Props) {
  return (
    <div className="h-14 border-2 relative  flex items-center shadow-md rounded-md cursor-pointer gap-2">
      <BiSolidMapPin className="text-xl absolute top-1/2 -translate-y-1/2 left-3" />
      <input
        value={value}
        type="text"
        onChange={onChange}
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        className="h-full outline-none placeholder:text-sm placeholder:text-white border-none pl-9 bg-transparent w-full "
      />
      <div className="overflow-hidden text-nowrap text-ellipsis bg-blue-500">
        <p className="px-3 py-1 rounded  bg-blue-900 absolute right-3 -top-4 text-[11px] border-2">
          {label}
        </p>
      </div>
    </div>
  );
}
