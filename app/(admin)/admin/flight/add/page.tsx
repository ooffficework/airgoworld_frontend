import CreateFlight from "@/components/Admin/Flight/CreateFlight";
import axiosInstance from "@/components/Auth/axiosInstance";
import Framer from "@/components/Shared/Framer";

export default async function page() {
  const response = await axiosInstance.get("/airport/select/");
  const airports = await response.data;
  const response2 = await axiosInstance.get("/airline/select/");
  const airlines = await response2.data;
  return (
    <Framer>
      <CreateFlight airports={airports} airlines={airlines}/>
    </Framer>
  );
}
