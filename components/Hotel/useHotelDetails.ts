import { useAppSelector } from "@/redux/store/hook"; // Adjust the path as needed

export const useHotelDetails = () => {
  const hotelDetails = useAppSelector((state) => state.hotelDetails.hotel); // Adjust the state path as needed
  return hotelDetails;
};