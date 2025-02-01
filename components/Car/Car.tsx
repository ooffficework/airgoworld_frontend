import { IoPeopleOutline } from "react-icons/io5";
import { TbEngine } from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
import { VscTypeHierarchySub } from "react-icons/vsc";

type Props = {
  data?: any;
};

export default function Car({ data }: Props) {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md">
        <div className="h-52 bg-white overflow-hidden border-2 rounded-t-lg">
          <img
            src={data?.images[0]}
            className="h-full w-full object-contain"
            alt=""
          />
        </div>
        <div className="p-2">
          <div className="flex justify-between my-2 items-center">
            <p className="font-semibold text-sm">{data?.name} </p>
            <p className="border-2 text-xs font-medium border-blue-500 px-4 py-1  rounded-md border-dotted">
              {data?.year}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 my-3 text-xs">
            <div className="flex font-semibold items-center gap-2">
              <IoPeopleOutline className="text-blue-500 text-[15px]" />
              <p>{data?.capacity}</p>
            </div>
            <div className="flex font-semibold items-center gap-2">
              <TbEngine className="text-blue-500 text-[15px]" />
              <p>{data?.fuel_type}</p>
            </div>
            <div className="flex font-semibold items-center gap-2">
              <LuFuel className="text-blue-500 text-[15px]" />
              <p>{data?.speed} mph</p>
            </div>
            <div className="flex font-semibold items-center gap-2">
              <VscTypeHierarchySub className="text-blue-500 text-[15px]" />
              <p>{data?.transmission}</p>
            </div>
          </div>
          <div className="flex border-t-2 justify-between pt-2  items-center">
            <p className="font-semibold">
              ${data?.rental_price} <span className="font-normal text-xs">/ month</span>
            </p>
            <div className="flex cursor-pointer items-center gap-2 text-sm ">
              <p className="font-semibold text-xs px-3 h-8 grid place-content-center rounded-md bg-blue-500 text-white">
                Book Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
