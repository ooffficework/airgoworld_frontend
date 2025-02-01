import axiosInstance from "@/components/Auth/axiosInstance";
import HotelDetailsAndBookingForm from "@/components/Hotel/HotelDetailsAndBookingForm";
import Framer from "@/components/Shared/Framer";


type Params = {
  searchParams: Promise<{
    hotel_id: string;
  }>;
};

export default async function page({ searchParams }: Params) {
  const { hotel_id } = await searchParams
  let data;
  if (hotel_id) {
    try {
      const response = await axiosInstance(`/hotel/details/${hotel_id}/`);
      data = response.data.data;
      console.log(data);
    } catch (error) {
      return (
        <div className="h-screen grid place-content-center">
          <p className="text-3xl font-semibold">Something Went Wrong</p>
        </div>
      );
    }
  }
  return (
    <Framer>
      <HotelDetailsAndBookingForm data={data} hotel_id={hotel_id}/>
    </Framer>
  );
}
