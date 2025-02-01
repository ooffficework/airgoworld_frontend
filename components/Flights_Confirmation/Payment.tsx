"use client";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";

export default function Payment() {
  const [active, setActive] = useState(-1);
  return (
    <div className="wrapper my-10">
      <div className="flex justify-center">
        <p className="font-semibold border-b-2 border-black pb-2 text-2xl text-center mb-7">
          SELECT A PAYMENT METHOD
        </p>
      </div>
      <div className="hidden lg:flex items-center gap-10 mt-3 justify-between px-4 md:px-10">
        <div className="flex flex-col relative gap-4 items-center justify-center text-lg font-semibold uppercase">
          <div
            className="h-20 w-36 rounded-xl relative border-2 shadow-md duration-300 active:scale-100 cursor-pointer hover:scale-105"
            onClick={() => setActive(0)}
          >
            <img
              src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
              className="h-full w-full object-cover rounded-xl"
              alt=""
            />
            <div
              className={`h-full w-full bg-blue-500/50 absolute grid place-content-center rounded-xl duration-300 top-0 left-0 ${
                active === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <BiCheck className="text-7xl mt-2 text-white" />
            </div>
          </div>
          <p>PayPal</p>
        </div>
        <div className="flex flex-col relative gap-4 items-center justify-center text-lg font-semibold uppercase">
          <div
            className="h-20 w-36 bg-white rounded-xl relative border-2 shadow-md duration-300 active:scale-100 cursor-pointer hover:scale-105"
            onClick={() => setActive(1)}
          >
            <img
              src="https://logoeps.com/wp-content/uploads/2014/02/38978-bank-transfer-logo-icon-vector-icon-vector-eps.png"
              className="h-full w-full object-cover rounded-xl"
              alt=""
            />
            <div
              className={`h-full w-full bg-blue-500/50 absolute grid place-content-center rounded-xl duration-300 top-0 left-0 ${
                active === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              {" "}
              <BiCheck className="text-7xl mt-2 text-white" />
            </div>
          </div>
          <p>Bank Transfer</p>
        </div>
        <div className="flex flex-col relative gap-4 items-center justify-center text-lg font-semibold uppercase">
          <div
            onClick={() => setActive(2)}
            className="h-20 w-36 rounded-xl bg-white relative border-2 shadow-md duration-300 active:scale-100 cursor-pointer hover:scale-105"
          >
            <img
              src="https://3decals.com/wp-content/uploads/payment-icon.png"
              className="h-full w-full object-contain rounded-xl"
              alt=""
            />
            <div
              className={`h-full w-full bg-blue-500/50 absolute grid place-content-center rounded-xl duration-300 top-0 left-0 ${
                active === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              {" "}
              <BiCheck className="text-7xl mt-2 text-white" />
            </div>
          </div>
          <p>Offline transfer</p>
        </div>
      </div>
      <div className="flex lg:hidden justify-center">
        <select
          name=""
          value={active}
          onChange={(e) => setActive(Number(e.target.value))}
          className="w-60 border-blue-500 rounded-md shadow-md border-2 bg-transparent py-3 px-4 outline-none"
        >
          <option value="0">Paypal</option>
          <option value="1">Bank Transfer</option>
          <option value="2">Offline Transfer</option>
        </select>
      </div>
      <div
        className={`flex justify-center relative duration-300  mt-10 ${
          active === -1 ? "h-0 " : "h-48"
        }`}
      >
        <div
          className={` border-2 absolute top-1/2 duration-300 -translate-y-1/2 left-1/2 rounded-xl bg-white  text-center flex flex-col justify-evenly shadow-lg shadow-gray-500 ${
            active === 0
              ? "opacity-100 -translate-x-1/2 w-[90%] mx-auto md:w-80 h-48"
              : "opacity-0 h-0 w-0 translate-x-0"
          }`}
        >
          <p className="flex flex-col">
            <span className="text-[15px]">Bank</span> <b>Paypal</b>
          </p>
          <p className="flex flex-col">
            <span className="text-[15px]">Account Name</span>{" "}
            <b>Johnson Stone</b>
          </p>
          <p className="flex flex-col">
            <span className="text-[15px]">Account Number</span>{" "}
            <b>2282893922</b>
          </p>
        </div>
        <div
          className={` border-2 absolute top-1/2 duration-300 -translate-y-1/2 left-1/2 rounded-xl bg-white  text-center flex flex-col justify-evenly shadow-lg shadow-gray-500 ${
            active === 1
              ? "opacity-100 -translate-x-1/2 w-[90%] mx-auto md:w-80 h-48"
              : "opacity-0 h-0 w-0 translate-x-0"
          }`}
        >
          <p className="flex flex-col">
            <span className="text-[15px]">Bank</span> <b>Bank Transfer</b>
          </p>
          <p className="flex flex-col">
            <span className="text-[15px]">Account Name</span>{" "}
            <b>Selena Jones </b>
          </p>
          <p className="flex flex-col">
            <span className="text-[15px]">Account Number</span> <b>434322322</b>
          </p>
        </div>
        <div
          className={` border-2 absolute top-1/2 duration-300 -translate-y-1/2 left-1/2 rounded-xl bg-white  text-center flex flex-col justify-evenly shadow-lg shadow-gray-500 ${
            active === 2
              ? "opacity-100 -translate-x-1/2 w-[90%] mx-auto md:w-80 h-48"
              : "opacity-0 h-0 w-0 translate-x-0"
          }`}
        >
          <p className="flex flex-col">
            <span className="text-[15px]">Bank</span> <b>Citi Bank</b>
          </p>
          <p className="flex flex-col">
            <span className="text-[15px]">Account Name</span>{" "}
            <b>Bryson Lukas</b>
          </p>
          <p className="flex flex-col">
            <span className="text-[15px]">Account Number</span>{" "}
            <b>6627728882</b>
          </p>
        </div>
      </div>
    </div>
  );
}
