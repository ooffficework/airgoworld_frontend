import CarList from "@/components/Car/CarList";
import FlightList from "@/components/Home/Flights/FlightLists";
import Newsletter from "@/components/Home/Newsletter";
import Base from "@/components/Home/Search/BaseSearchForm";
import { HeroWriteUp } from "@/components/Home/Search/HeroWriteUp";
import HotelList from "@/components/Hotel/HotelList";
import Framer from "@/components/Shared/Framer";
import TourList from "@/components/Tour/TourList";

export default function Home() {
  return (
    <Framer>
      <div className="">
        <div className="h-screen">
          <div className="h-[70vh] flex flex-col relative items-end bg-black">
            <HeroWriteUp />
            <img
              src="/bg.jpg"
              className="absolute border-b-2 border-blue-500 object-cover top-0 z-10 left-0 w-full h-full"
              alt=""
            />
            <div className="absolute bg-gradient-to-b z-20 from-black/80 via-black/30 to-transparent  top-0 z-28 left-0 w-full h-full"></div>
            <Base />
          </div>
        </div>
        <HotelList />
        <FlightList />
        <CarList />
        <TourList />
        <Newsletter />
      </div>
    </Framer>
  );
}
