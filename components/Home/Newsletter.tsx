export default function Newsletter() {
  return (
    <div className="px-3 xl:px-0">
      <div className="h-96 items-center text-white grid grid-cols-1 lg:grid-cols-2 relative rounded-xl overflow-hidden wrapper my-24">
        <img
          src="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/privilege-club/cards-circle/h1-ffp-cards-qsuite-crew.jpg"
          className="absolute top-0 left-0 object-cover w-full z-[-2] h-full"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent z-[-1] to-black/70"></div>
        <div className=" flex flex-col p-8 gap-5">
          <p className="text-[27px] font-normal">Never miss an Offer</p>
          <p className="text-[15px]">
            Subscribe and be the first to receive our exclusive offers
          </p>
          <input
            type="text"
            placeholder="Email Address"
            className="h-[50px] text-black pl-4 text-[15px] outline-none bg-white rounded-lg  border-2 "
          />
          <div className="flex items-start gap-3">
            <div className="h-5 w-5 shrink-0 bg-white rounded border-2 grid place-content-center"></div>
            <p className="text-[13px]">
              I would like to get offers and news from Qatar Airways. I have
              read and understood the privacy notice.
            </p>
          </div>
          <button className="py-3 px-8 shadow-md rounded-full w-fit border-2">
            Subscribe
          </button>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
