'use client'
import FlightPricingList from "./FlightPricingList";
import ItineraryHeader from "./ItineraryHeader";
import RouteHeader from "./RouteHeader";
import { TFlight } from "./type";
import store from 'store';

type Props = {
  data: TFlight[];
};

export default function Base({ data }: Props) {
  const first = data[0];
  const values = store.get('flightStore') || {};
  const storageData = {
    ...values,
    departureCity: first.origin.city,
    arrivalCity: first.destination.city,
    departureIata: first.origin.iata,
    arrivalIata: first.destination.iata,
    arrivalDate: first.arrival_date,
  };
  store.set('flightStore', storageData);

  return (
    <div className="mt-24">
      <ItineraryHeader />
      <RouteHeader />
      <FlightPricingList data={data} />
    </div>
  );
}
