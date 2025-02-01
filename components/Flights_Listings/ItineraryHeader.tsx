import store from "store";
import { BiCalendar } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { GoArrowSwitch } from "react-icons/go";

export default function ItineraryHeader() {
  const flightStore = store.get("flightStore") || {};
  function formatDateToWords(dateString: string) {
    const [day, month, year] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const formatter = new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    return formatter.format(date);
  }
  const passengers =
    Number(flightStore.adults) +
    Number(flightStore.children) +
    Number(flightStore.infants);
  return (
    <div className="wrapper p-6 bg-white rounded shadow-md">
      <div className="text-2xl flex gap-7 items-center font-semibold ">
        <p>
          {flightStore.departureCity} ({flightStore.departureIata})
        </p>
        <GoArrowSwitch />
        <p>
          {flightStore.arrivalCity} ({flightStore.arrivalIata})
        </p>
      </div>
      <p className="font-semibold mt-3">
        {flightStore.tripType === "round" ? "Round Trip" : "One Way Trip"}
      </p>
      <div className="flex gap-2 mt-3 items-center">
        <BiCalendar />
        <p className="">{formatDateToWords(flightStore.departureDate)}</p>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <BsPerson />
        <p>
          {passengers} {passengers > 1 ? "Passengers" : "Passenger"}
        </p>
      </div>
    </div>
  );
}
