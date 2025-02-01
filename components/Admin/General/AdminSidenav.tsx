"use client";
import {
  BiSolidHome,
  BiSolidDashboard,
  BiSolidPlaneTakeOff,
  BiSolidHotel,
  BiSolidCar,
  BiSolidMap,
  BiSolidUser,
  BiSolidCog, // For Settings
  BiSolidChart, // For Reports/Analytics
  BiSolidBell, //for notifications
} from "react-icons/bi"; // Or your preferred icon library
import { MdFlight } from "react-icons/md";
import { MdAirlines } from "react-icons/md";
import { useState } from "react";
import NavCard from "./NavCard";

export default function AdminSidenav() {
  const [opened, setOpened] = useState(-100);
  const nav = [
    {
      icon: <BiSolidDashboard />,
      label: "Dashboard",
      link: "/admin/dashboard",
    },
    {
      icon: <BiSolidPlaneTakeOff />,
      label: "Flights",
      link: "/admin/flights",
      children: [
        { label: "Manage Flights", link: "/admin/flight/manage" },
        { label: "Add New Flight", link: "/admin/flight/add" },
        { label: "Booked Flights", link: "/admin/flight/book" },
      ],
    },
    {
      icon: <BiSolidHotel />,
      label: "Hotels",
      link: "/admin/hotel",
      children: [
        { label: "Manage Hotels", link: "/admin/hotel/manage" },
        { label: "Add New Hotel", link: "/admin/hotel/add" },
        { label: "Room Management", link: "/admin/hotel/rooms" },
      ],
    },
    {
      icon: <MdFlight />,
      label: "Airports",
      link: "/admin/airport",
      children: [
        { label: "Manage Airports", link: "/admin/airport/manage" },
        { label: "Add New Airport", link: "/admin/airport/add" },
      ],
    },

    {
      icon: <MdAirlines />,
      label: "Airline",
      link: "/admin/airline",
      children: [
        { label: "Manage Airlines", link: "/admin/airline/manage" },
        { label: "Add New Airline", link: "/admin/airline/add" },
      ],
    },
    {
      icon: <BiSolidCar />,
      label: "Cars",
      link: "/admin/cars",
      children: [
        { label: "Manage Cars", link: "/admin/cars/manage" },
        { label: "Add New Car", link: "/admin/cars/add" },
        { label: "Rental Management", link: "/admin/cars/rentals" },
      ],
    },
    {
      icon: <BiSolidMap />,
      label: "Tours",
      link: "/admin/tours",
      children: [
        { label: "Manage Tours", link: "/admin/tours/manage" },
        { label: "Create New Tour", link: "/admin/tours/create" },
        { label: "Tour Bookings", link: "/admin/tours/bookings" },
      ],
    },
    {
      icon: <BiSolidUser />,
      label: "Users",
      link: "/admin/users",
    },
    {
      icon: <BiSolidChart />,
      label: "Reports",
      link: "/admin/reports",
    },
    {
      icon: <BiSolidBell />,
      label: "Notifications",
      link: "/admin/notifications",
    },
    {
      icon: <BiSolidCog />,
      label: "Settings",
      link: "/admin/settings",
    },
  ];

  return (
    <div className="w-[300px] border-r-2 h-screen overflow-y-auto border-black bg-gray-200 p-4">
      <p className=" uppercase pb-5 text-xl font-semibold">Airgoworld</p>
      <div className="flex flex-col gap-2">
        {nav.map((el, key) => (
          <NavCard
            key={key}
            track={key}
            opened={opened}
            setOpened={setOpened}
            icon={el.icon}
            label={el.label}
            link={el.link}
            children={el.children}
          />
        ))}
      </div>
    </div>
  );
}
