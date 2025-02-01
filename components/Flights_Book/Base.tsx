import Form from "./Form";
import ItineraryDetails from "./ItineraryDetails ";

export default function Base() {
  
  return (
    <div className="grid  gap-5 wrapper mt-24 grid-cols-[1fr_300px]">
        <Form />
        <ItineraryDetails />
    </div>
  )
}
