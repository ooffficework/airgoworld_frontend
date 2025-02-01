import { BsClock, BsStar, BsStarFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

type Props = {
  data?: any;
  track: number
};

export default function Tour({ data, track }: Props) {
  const approxNumber = Math.floor(3.7);

  const result = Array.from({ length: approxNumber }).map((_, index) => {
    return `${index + 1}`;
  });
  
  return (
    <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${data.images[0]})`, backgroundSize: 'fill', backgroundRepeat: 'no-repeat'}} className={`h-80 group p-4 rounded-lg shadow-md  text-white flex flex-col justify-between ${(track === 2 || track === 4 || track === 7 || track === 6) && 'lg:col-span-2'}`}>
      <p className="group-hover:text-xl duration-500 group-hover:font-semibold">{data.name}</p>
      <div className="flex flex-col gap-1">
        <p className="group-hover:opacity-100 opacity-0 duration-500">{data.location}</p>
        <p className="text-base translate-x-6 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 duration-500 font-semibold">USD {data.price.slice(0,6)}</p>
        <div className={`h-[2px] bg-white w-0 group-hover:w-full duration-500`}></div>
        <div className="flex mt-3 group-hover:opacity-100 opacity-0 duration-500 translate-x-20 group-hover:translate-x-0">
          {result.map(() => (
            <BsStarFill />
          ))}
        </div>
      </div>
    </div>
  );
}
