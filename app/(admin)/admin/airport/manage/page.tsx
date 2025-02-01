import Airports from "@/components/Admin/Airport/Airports"
import axiosInstance from "@/components/Auth/axiosInstance"
import Framer from "@/components/Shared/Framer"

export type TAirport = {
  id: number;
  name: string;
  city: string;
  country: string;
  iata: string;
  scope: "international" | "domestic"; // Assuming scope can only be these values
  active: boolean;
  status: "active" | "inactive"; // Assuming status can be either active or inactive
};


export default async function page() {
  const response = await axiosInstance.get('/airport/all/')
  const data: TAirport[] = await response.data
  return (
    <Framer>
      <Airports data={data}/>
    </Framer>
  )
}
