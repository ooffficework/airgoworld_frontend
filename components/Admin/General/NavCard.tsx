"use client";
import { setTopNavTitle } from "@/redux/features/admin";
import { useAppDispatch } from "@/redux/store/hook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { BsChat, BsChevronDown, BsHeadphones } from "react-icons/bs";

type Props = {
  link: string;
  label: string;
  icon: any;
  icon2?: any;
  children?: any;
  opened: number;
  track: number;
  setOpened: Dispatch<SetStateAction<number>>;
};

export default function NavCard({
  link,
  label,
  icon,
  icon2,
  opened,
  track,
  setOpened,
  children,
}: Props) {
  const pathname = usePathname();
  const pathName = pathname.split("/")[pathname.split("/").length - 1];

  const dispatch = useAppDispatch()
  return (
    <div className="font-semibold">
      {children ? (
        <div className="text-sm">
          <div
            className={`flex h-[52px] border-2 hover:bg-blue-500 hover:text-white duration-500 hover:border-blue-500 cursor-pointer px-2 ${
              pathName == link ? "bg-blue-500 " : ""
            } rounded  shadow-md justify-between items-center`}
            onClick={() => {
              dispatch(setTopNavTitle(label))
              if (track === opened) {
                setOpened(-100);
              } else {
                setOpened(track);
              }
            }}
          >
            <div className="flex gap-3  items-center">
              {icon}
              <p>{label}</p>
            </div>
            <BsChevronDown className={`stroke-1 text-sm transition-transform duration-500 ${track === opened ? "rotate-180" : ""} `} />
          </div>
          <div
            className={`grid pl-3 duration-500  gap-2 ${
              opened === track ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden text-[15px] flex-col flex gap-3 ">
              {children.map((el: any, key: number) => (
                <Link key={key} href={el.link} className={` inline-block hover:text-blue-600 text-sm ${ key === children.length -1 && 'mb-3'} ${key === 0 && 'mt-3'}`}>
                  {el.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Link
          href={link}
          className={`flex border-2 text-sm hover:bg-blue-500 hover:text-white duration-500 hover:border-blue-500 h-[50px] cursor-pointer px-2 ${
            pathName == link ? "bg-blue-500 text-white" : ""
          } rounded-md shadow-md justify-between items-center`}
        >
          <span className="flex gap-3 items-center">
            {icon}
            <span>{label}</span>
          </span>
        </Link>
      )}
    </div>
  );
}
