"use client";

import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Topnav() {
  const pathname = usePathname();
  const title = useAppSelector(store => store.admin.value.topNavTitle)
  
  return (
    <div className="h-20 border-b-2 border-black flex items-center justify-between px-4">
      <p className="text-lg font-bold uppercase">{title}</p>
    </div>
  );
}
