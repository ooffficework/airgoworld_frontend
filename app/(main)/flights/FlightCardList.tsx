import axiosInstance from "@/components/Auth/axiosInstance";
import FlightCard from "@/components/Flights/FlightCard";
import { TFlight } from "@/components/Home/Flights/type";

export default async function FlightCardList() {
  const response = await axiosInstance.get('http://localhost:8000/flight/display/')
  const data: TFlight[] = response.data.data
  return (
    <div className="mt-60 wrapper">
      <p className="text-2xl uppercase font-semibold mb-5">Available Flights</p>
      <div className="grid  grid-cols-3 gap-5">
        {data.map((el,key ) => (
          <FlightCard data={el} key={key}/>
        ))}
      </div>
    </div>
  );
}
