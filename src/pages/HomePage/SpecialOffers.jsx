import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";

const SpecialOffers = () => {
  const rooms = useLoaderData();
  console.log(rooms);
  return (
    <div className=" md:pt-20 bg-slate-50 ">
      <div>
        <p
          className="md:text-4xl text-xl 
                    text-zinc-800 md:mb-20 font-bold 
                    text-center my-4"
                    data-aos="zoom-in-down">
          Our Spacial Offer
        </p>
      </div>

      <div>
        <Marquee>
          <div className="flex gap-6">
            {rooms?.map((images) => (
              <div key={images._id}>
                <div className="relative " data-aos="zoom-in-down">
                  <img
                    className="md:h-[300px] h-32 rounded-md hover:scale-105 duration-700"
                    src={images.roomImages}
                    alt=""
                  />
                  <p
                    className="absolute bottom-0 text-red-600 font-bold md:p-3 p-1
                                 rounded-tr-2xl bg-yellow-50 border-red-600 border-r-2 "
                  >
                    Spacial Offer<span className="md:text-2xl ml-2">10%</span>{" "}
                  </p>
                </div>
                <p></p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default SpecialOffers;
