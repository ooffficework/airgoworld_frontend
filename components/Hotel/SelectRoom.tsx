import React from "react";

export default function SelectRoom() {
  return (
    <select
      name=""
      className="bg-transparent outline-none border-blue-600 rounded shadow-md cursor-pointer font-semibold border-2 px-3 py-2"
    >
      <option value="" className="">
        1 - $300
      </option>
      <option value="" className="">
        2 - $750
      </option>
    </select>
  );
}
