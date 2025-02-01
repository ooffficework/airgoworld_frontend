'use client'
import { decreaseAdultsNumber, decreaseChildrenNumber, decreaseInfantsNumber, increaseAdultsNumber, increaseChildrenNumber, increaseInfantsNumber } from "@/redux/features/flightBookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { BiMinus, BiPlus } from "react-icons/bi";

type Props = {
  title: string;
};

export default function PassengerRoomTracker({ title,  }: Props) {
  const dispatch = useAppDispatch()
  const values = useAppSelector(store => store.flightBooking.values)
  const value = title === 'adults' ? values.adults : title === "children" ? values.children : values.infants
  return (
    <div className="flex justify-between items-center gap-7 select-none px-3">
      <div className="text-sm font-semibold">
        <p className="capitalize">{title} </p>
        <p className={`font-light text-[11px] ${title === 'rooms' && 'hidden'}`}>
          {title === "adults"
            ? "Adult 12+"
            : title === "children"
            ? "Child 2 - 12"
            : "0 - 2"}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div 
        onClick={() => {
          if(title === "adults"){
            dispatch(decreaseAdultsNumber())
          }
          if(title === "children"){
            dispatch(decreaseChildrenNumber())
          }
          if(title === "infants"){
            dispatch(decreaseInfantsNumber())
          }
         
        }}

        className="h-8 w-8 shadow-sm rounded-sm border-2 grid place-content-center active:scale-90 cursor-pointer duration-300 group">
          <BiMinus className="group-active:scale-90 duration-300" />
        </div>
        <div className="h-8 w-8 select-none shadow-sm rounded-sm border-2 grid place-content-center">
          <p className="text-[13px] font-semibold">{value}</p>
        </div>
        <div
           onClick={() => {
            if(title === "adults"){
              dispatch(increaseAdultsNumber())
            }
            if(title === "children"){
              dispatch(increaseChildrenNumber())
            }
            if(title === "infants"){
              dispatch(increaseInfantsNumber())
            }
          }}
        className="h-8 w-8 shadow-sm rounded-sm border-2 grid place-content-center active:scale-90 cursor-pointer duration-300 group">
          <BiPlus className="group-active:scale-90 duration-300" />
        </div>
      </div>
    </div>
  );
}
