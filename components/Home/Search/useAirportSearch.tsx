import { useState, useEffect } from "react";
import axiosInstance from "@/components/Auth/axiosInstance";

type TAirport = {
    id: number;
    name: string;
    city: string;
    country: string;
    iata: string;
    scope: "domestic" | "international"; // Assuming it has only these two values
    active: boolean;
    status: "active" | "inactive"; // Assuming these are the possible statuses
  };

export function useAirportSearch(value: string) {
  const [data, setData] = useState<TAirport[]>([]);
  const [loading, setLoading] = useState<boolean >(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!value) return;
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/airport/search/${value}/`);
        setData(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [value]);

  return { data, loading, error };
}
