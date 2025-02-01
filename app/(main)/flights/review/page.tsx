import axiosInstance from "@/components/Auth/axiosInstance";
import Base from "@/components/Flights_Review/Base";
import Framer from "@/components/Shared/Framer";

type Params = {
  searchParams: Promise<{
    flight: string;
  }>;
};

export default async function page({ searchParams }: Params) {
  const { flight } =  await searchParams;
  const url = `/flight/details/${flight.trim()}/`;
  const response = await axiosInstance.get(url);
  const data = await response.data;
  return (
    <Framer>
      <Base data={data} flight={flight} />;
    </Framer>
  );
}
