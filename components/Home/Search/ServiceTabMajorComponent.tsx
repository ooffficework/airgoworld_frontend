"use client";
import FlightSearchForm from "@/components/Flights/FlightSearchForm";
import HotelSearch from "@/app/(main)/test/HotelSearch";
import ServicesTab from "./ServicesTab";
import { useAppSelector } from "@/redux/store/hook";
import { AnimatePresence, motion } from "framer-motion";
export default function ServicesTabMajorComponent() {
  const tab = useAppSelector((store) => store.tab.value);
  const variant = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <div className="wrapper z-40">
      <ServicesTab />
      <div className="relative bg-emerald-500 z-50">
        <AnimatePresence mode="wait">
          {tab === "flight" && (
            <motion.div
              variants={variant}
              initial="initial"
              key={0}
              animate="animate"
              exit="exit"
              className="absolute top-0 left-0 w-full"
            >
              <FlightSearchForm />
            </motion.div>
          )}
          {tab === "hotel" && (
            <motion.div
              variants={variant}
              key={1}
              exit="exit"
              initial="initial"
              animate="animate"
              className="absolute top-0 left-0 w-full"
            >
              <HotelSearch />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
