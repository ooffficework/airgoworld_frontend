import axiosInstance from "@/components/Auth/axiosInstance";
import Base from "@/components/Flights_Listings/Base";
import Framer from "@/components/Shared/Framer";
import Link from "next/link";

type Params = {
  searchParams: Promise<{
    origin?: string;
    destination?: string;
    departure_date?: string;
  }>;
};


export default async function Page({ searchParams }: Params) {
  const { origin, destination, departure_date} = await searchParams;
  const url = `/flight/search/${origin}/${destination}/${departure_date}/`;
  let errorMessage = "";
  let data;
  try {
    const response = await axiosInstance.get(url);
    data = await response.data;
  } catch (error: any) {
    errorMessage = error.message || "Something went wrong while fetching data.";
  }
  if (errorMessage) {
    return (
      <div className="mt-60 text-center font-semibold text-2xl">
        <p>{errorMessage}</p>
        <Link
          href={"/"}
          className="px-5 py-3 rounded-md duration-300 active:scale-90 shadow-md bg-blue-500 text-[15px] font-semibold mt-5 inline-block text-white"
        >
          Back to Search
        </Link>
      </div>
    );
  }
  if (data && Array.isArray(data) && data.length === 0) {
    return (
      <div className="mt-60 text-center font-semibold text-2xl">
        <p>No Results Found</p>
        <Link
          href={"/"}
          className="px-5 py-3 rounded-md duration-300 active:scale-90 shadow-md bg-blue-500 text-[15px] font-semibold mt-5 inline-block text-white"
        >
          Back to Search
        </Link>
      </div>
    );
  }

  return (
    <Framer>
      <Base data={data} />;
    </Framer>
  );
}
