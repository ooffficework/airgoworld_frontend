export default function Random() {
  return (
    <div className="wrapper my-16">
      <p className="title mb-5">Popular Destinations</p>
      <div className="h-[90vh]  grid gap-4 grid-cols-[1fr_1fr_2fr]">
        <div className=" grid gap-4 grid-rows-2">
          <div className="bg-purple-500 rounded-2xl relative shadow-md overflow-hidden">
            <img src="https://as1.ftcdn.net/jpg/03/04/88/18/1000_F_304881889_yJ1S3butl9gVs0kMptYTU2N1EVmEJbz8.jpg" alt="" className="absolute top-0 left-0 object-cover w-full h-full"/>
          </div>
          <div className="bg-green-500 rounded-2xl shadow-md relative overflow-hidden">
            <img src="https://www.usnews.com/object/image/0000016f-afeb-df6f-a5ef-bfff9b8f0000/23-krabi-getty.jpg?update-time=1579204562702&size=responsive640" alt="" className="absolute top-0 left-0 object-cover w-full h-full"/>
          </div>
        </div>
        <div className="grid gap-4 grid-rows-[1fr_1.5fr]">
          <div className="bg-fuchsia-500 rounded-2xl shadow-md relative overflow-hidden">
            <img src="https://pohcdn.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2021-01/Niagara-Falls.jpg" alt="" className="absolute top-0 left-0 object-cover w-full h-full"/>
          </div>
          <div className="bg-blue-500 rounded-2xl shadow-md overflow-hidden relative">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/leh/mmt/destination/m_leh-landscape_l_400_640.jpg" className="absolute top-0 left-0 object-cover w-full h-full" alt="" />
          </div>
        </div>
        <div className=" grid gap-4 grid-rows-[2fr_1fr_2fr]">
          <div className="bg-purple-500 rounded-2xl shadow-md relative overflow-hidden">
            <img
              src="https://www.travelandleisure.com/thmb/wsA6EXFuYkqtuJGLbQWw05-cwPs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lake-como-MOSTBEAUTIFUL0921-cb08f3beff1041e4beefc67b5e956b23.jpg"
              className="absolute top-0 left-0 object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="bg-yellow-500  relative overflow-hidden rounded-2xl shadow-md">
              <img
                src="https://www.travelandleisure.com/thmb/ip03-TS_bwMVg8elPNZ8pKaEOO8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mt-fuji-japan-MOSTBEAUTIFUL0921-413f7d67bb4f4539a336ebba14f74ed2.jpg"
                className="absolute top-0 left-0 object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="bg-blue-500 rounded-2xl shadow-md relative overflow-hidden">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/great-ocean-road-174028267-1494616481.jpg?crop=0.888888888888889xw:1xh;center,top&resize=768:*"
                className="absolute top-0 left-0 object-cover w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className="bg-purple-500 rounded-2xl overflow-hidden shadow-md relative">
            <img
              className="absolute top-0 left-0 object-cover w-full h-full"
              src="https://www.graygroupintl.com/hubfs/Gray%20Group%20International/GGI%20-%20Approved%20and%20Converted%20%28WebP%29/Beautiful%20Destinations%20A%20Journey%20Through%20the%20Worlds%20Wonders.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
