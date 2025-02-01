import Airline from "@/components/Admin/Airline/Airline"
import axiosInstance from "@/components/Auth/axiosInstance"
import Framer from "@/components/Shared/Framer"

export type TAirline = {
  id: number; // Assuming Django auto-generates an ID
  name: string;
  iata: string; // 3-letter unique identifier
  country: string;
  active: boolean;
  status: "active" | "inactive"; // Based on STATUS_CHOICES
  logo?: string | null; // Optional (can be blank or null)
  created_at: string; // ISO date string (e.g., "2024-01-30T12:34:56Z")
  updated_at: string;
};




export default async function page() {
  const response = await axiosInstance.get('/airline/all/')
  const data = await response.data
  return (
    <Framer>
      <Airline data={data}/>
    </Framer>
  )
}
