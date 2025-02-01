import axiosInstance from "@/components/Auth/axiosInstance";
import HotelInvoice from "@/components/Hotel/HotelInvoice";
import Framer from "@/components/Shared/Framer";
type Params = {
  searchParams: Promise<{
    booking_id: string;
  }>;
};

export default async function Invoice({ searchParams }: Params) {
  const { booking_id } = await searchParams; // Directly use searchParams as an object
  const response = await axiosInstance.get(`/hotel/book/details/${booking_id}`);
  const data = response.data.data;
  
  if (!data) return null;  
  
  return (
    <Framer>
      <HotelInvoice data={data} />
    </Framer>
  );
}
