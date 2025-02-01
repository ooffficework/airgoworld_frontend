"use client";
import { TFlight } from "../Flights_Listings/type";
import Link from "next/link";
import store from 'store'
type Props = {
  data: TFlight;
};
export default function Price({ data }: Props) {
  
 
  const flightStore = store.get('flightStore') || {}
  const selected = data.cabin.find((el) => el.name === flightStore.cabinClass);
  const childrenPrice = flightStore.tripType === 'round' ? ((selected?.prices.children || 0) * flightStore.children) * 2 : (selected?.prices.children || 0) * flightStore.children;
  const adultsPrice = flightStore.tripType === 'round' ? ((selected?.prices.adult || 0) * flightStore.adults) * 2 : (selected?.prices.adult || 0) * flightStore.adults;
  const infantsPrice = flightStore.tripType === 'round' ? ((selected?.prices.infant || 0) * flightStore.infants) * 2 : (selected?.prices.infant || 0) * flightStore.infants;
  const total = childrenPrice + adultsPrice + infantsPrice;
  store.set('flightStore', {...flightStore, total})
  return (
    <div className="wrapper pb-5">
      <div className="border-2  p-5 mt-10 shadow-md">
        <p className="text-lg">Your total price</p>
        <div className="">
          <p className="font-semibold text-3xl mt-5 mb-3">
            ${total.toLocaleString()}
          </p>
          <p className="text-sm mb-5 text-gray-700">
            By submitting continue I agree to the fare conditions
          </p>
          <Link href={'/flights/book'} className="bg-blue-800 inline-block rounded duration-300 active:scale-95 text-white font-semibold px-12 py-5 shadow-md">
            Agree and Continue
          </Link>
        </div>
      </div>
      <div className=" mt-10">
        <p className="text-xl font-semibold mb-5">Price Breakdown</p>
        <div
          className={`grid border-2 shadow-md 
            ${flightStore.children === 0 && flightStore.infants === 0 && "grid-cols-1"}
            ${flightStore.children === 0 && flightStore.infants >= 1 && "grid-cols-2"}
            ${flightStore.children >= 1 && flightStore.infants === 0 && "grid-cols-2"}
            ${flightStore.children >= 1 && flightStore.infants >= 1 && "grid-cols-3"}
          `}
        >
          <div className="space-y-4 border-r-2 p-4 flex flex-col justify-center items-center">
            <p>Price Per Adult: {flightStore.tripType === 'round' ? (Number(selected?.prices.adult) * 2).toLocaleString() : selected?.prices.adult.toLocaleString()}</p>
            <p>No Of Adults: {flightStore.adults}</p>
            <p className="text-lg font-semibold">
              ${adultsPrice.toLocaleString()}
            </p>
          </div>
          {flightStore.children !== 0 && (
            <div className="space-y-4 border-r-2 p-4 flex flex-col justify-center items-center">
              <p>
                Price Per Child: {flightStore.tripType === 'round'? (Number(selected?.prices.children) * 2).toLocaleString() : Number(selected?.prices.children).toLocaleString() }
              </p>
              <p>No Of Children: {flightStore.children}</p>
              <p className="text-lg font-semibold">
                ${childrenPrice.toLocaleString()}
              </p>
            </div>
          )}
          {flightStore.infants !== 0 && (
            <div className="space-y-4 border-r-2 p-4 flex flex-col justify-center items-center">
                <p>
                Price Per Infant: {flightStore.tripType === 'round'? (Number(selected?.prices.infant) * 2).toLocaleString() : Number(selected?.prices.infant).toLocaleString() }
              </p>
              <p>No Of Infants: {flightStore.infants}</p>
              <p className="text-lg font-semibold">
                ${infantsPrice.toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
