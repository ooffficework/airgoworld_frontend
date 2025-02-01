import Manage from "@/components/Admin/Flight/Manage";
import axiosInstance from "@/components/Auth/axiosInstance";
import { TFlight } from "@/components/Home/Flights/type";
import Framer from "@/components/Shared/Framer";



export default async function page() {
  let flights: TFlight[] = [];
  try {
    const response = await axiosInstance.get("/flight/all/");
    const data = response.data;
    flights = data.data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
  }
  return (
    <Framer>
      <Manage data={flights} />
    </Framer>
  );
}
