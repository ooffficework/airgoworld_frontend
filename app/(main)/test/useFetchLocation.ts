import axiosInstance from "@/components/Auth/axiosInstance";
import { useAppSelector } from "@/redux/store/hook";
import { useEffect, useState } from "react";

export const useFetchLocation = (location: string) => {
  const value = useAppSelector(store => store.hotelBooking.values.location)
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.post("/locations/search/", { location });
      console.log("API Response:", response.data.data);
      setData(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (err) {
      setError("Failed to load locations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [value]);
  return {data, loading, fetchData, error}
};
