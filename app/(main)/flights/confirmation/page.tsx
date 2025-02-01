import axiosInstance from "@/components/Auth/axiosInstance";
import Confirmation from "@/components/Flights_Confirmation/Confirmation";
import { FlightInvoice } from "@/components/Flights_Confirmation/FlightInvoice";
import Payment from "@/components/Flights_Confirmation/Payment";
import Framer from "@/components/Shared/Framer";


type Params = {
  searchParams: Promise<{
    booking_id: string;
  }>;
};
export default async function page({ searchParams }: Params) {
  const { booking_id } = await searchParams;
  if (!booking_id) return;
  const response = await axiosInstance.get(
    `/flight/book/details/${booking_id}`
  );
  const data = await response.data;
  console.log(data)
  return (
    <Framer>
      <Confirmation data={data}/>
      <FlightInvoice data={data} />
      <Payment />
    </Framer>
  );
}
