import Base from "@/components/Hotel/HotelSearchForm";
import HotelList from "@/components/Hotel/HotelList";
import Framer from "@/components/Shared/Framer";

export default function page() {
  return (
    <Framer>
        <Base />
        <div className="h-20"></div>
        <HotelList />
    </Framer>
  )
}
