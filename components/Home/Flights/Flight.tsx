import { BsClock, BsStar, BsStarFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { TFlight } from "./type";

type Props = {
  data?: TFlight;
  track: number;
};

export default function Flight({ data, track }: Props) {
  const date = new Date(data?.departure_date as any);
  const options = { weekday: "long", day: "2-digit", month: "long" };
  const formattedDate = date.toLocaleDateString("en-GB", options as any);
  const price = data?.cabin.find(el => el.name === 'economy')

  const imageUrls = [
    "https://www.luxxu.net/blog/wp-content/uploads/2018/06/Most-Instagrammable-Places-in-London-04.jpg",
    "https://media.cntraveler.com/photos/5fc6818f3cfe1de2cab79372/master/pass/Amsterdam-GettyImages-840603854.jpg",
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?cs=srgb&dl=pexels-peng-liu-45946-169647.jpg&fm=jpg",
    "https://static.toiimg.com/thumb/103232635.cms?resizemode=4&width=400",
    "https://i0.wp.com/theboutiqueadventurer.com/wp-content/uploads/2021/01/seattle-sunset-seen-from-kerry-park.jpg?resize=1200%2C800&ssl=1",
    "https://www.attractionsofamerica.com/images/all_travel/20210124051519_beautiful-cities-usa-charleston.jpg",
  ];
  
  
  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${imageUrls[track]})`,
      }}
      className={`h-80 rounded-3xl text-white relative group flex shadow-md p-4  ${
        track === 0 || track === 5 || track === 6
          ? "lg:col-span-2  flex-col justify-end"
          : "items-center justify-end flex-col"
      } border-2 rounded-lg shadow-md`}
    >
      <p className="text-[22px] font-medium mb-3">{data?.destination.city}</p>
      <div className="grid grid-rows-[0fr] w-full opacity-0 group-hover:opacity-100 group-hover:grid-rows-[1fr] duration-700 cursor-pointer">
        <div
          className={`overflow-hidden w-full flex flex-col ${
            track === 0 || track === 5 || track === 6 ? "" : "items-center "
          }`}
        >
          <div
            className={`flex text-[15px] ${
              track === 0 || track === 5 || track === 6
                ? "justify-between"
                : "flex-col"
            }`}
          >
            <p>{formattedDate}</p>
            <p>
              Economy from{" "}
              <span className="text-lg font-semibold">
                ${price?.prices?.adult?.toLocaleString()}
              </span>
            </p>
          </div>
          <button className="w-full py-4 shadow-md duration-300 active:scale-95 bg-blue-500 text-white rounded-full my-3">
            Book Now
          </button>
          <div className="flex justify-center">
            <p className="font-semibold border-b-2 mt-2 w-fit ">Discover</p>
          </div>
        </div>
      </div>
    </div>
  );
}
