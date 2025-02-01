import { BiMinus, BiPlus } from "react-icons/bi";

type Props = {
  title: string;
  value: number;
};

export default function PassengerRoom({ title, value }: Props) {
  return (
    <div className="flex justify-between gap-7 select-none px-3">
      <div className="text-sm font-semibold">
        <p className="capitalize">{title} </p>
        <p className="font-normal text-xs">
          {title === "adults"
            ? "Adult 12+"
            : title === "children"
            ? "Child 2 - 12"
            : "0 - 2"}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 shadow-sm rounded-sm border-2 grid place-content-center active:scale-90 cursor-pointer duration-300 group">
          <BiPlus className="group-active:scale-90 duration-300" />
        </div>
        <div className="h-8 w-8 select-none shadow-sm rounded-sm border-2 grid place-content-center">
          <p className="text-[13px] font-semibold">{value}</p>
        </div>
        <div className="h-8 w-8 shadow-sm rounded-sm border-2 grid place-content-center active:scale-90 cursor-pointer duration-300 group">
          <BiMinus className="group-active:scale-90 duration-300" />
        </div>
      </div>
    </div>
  );
}
