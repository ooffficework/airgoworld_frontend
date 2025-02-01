import AdminSidenav from "@/components/Admin/General/AdminSidenav";
import React from "react";
import Topnav from "./Topnav";
import { RedirectIfNotAdmin } from "@/helper/server";

type Children = {
  children: React.ReactNode;
};

export default async function layout({ children }: Children) {
  await RedirectIfNotAdmin()
  return (
    <div className="grid h-screen overflow-y-auto grid-cols-[auto_1fr]">
      <AdminSidenav />
      <div className="bg-white overflow-y-auto h-screen flex flex-col">
        <Topnav />
        <div className="flex-1 flex flex-col overflow-y-auto ">
        {children}
        </div>
      </div>
    </div>
  );
}
