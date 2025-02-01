import UpdateFlight from "@/components/Admin/Flight/UpdateFlight";
import axiosInstance from "@/components/Auth/axiosInstance";


type Params = {
  searchParams: Promise<{
    id: string;
  }>;
};

export default async function page({ searchParams }: Params) {
  const { id } = await searchParams;  
  const response = await axiosInstance.get("/airport/select/");
  const airports = response.data;
  const response2 = await axiosInstance.get("/airline/select/");
  const airlines = response2.data;
  const response3 = await axiosInstance.get(`/flight/details/${id}/`);
  const flight = response3.data;

  return (
    <div>
      <UpdateFlight flight={flight} airports={airports} airlines={airlines} />
    </div>
  );
}
