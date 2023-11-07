import React, { useEffect } from "react";
import useRooms from "../../Hooks/useRooms";
import { Link, useLoaderData } from "react-router-dom";

const AvalableRooms = () => {

    const data = useLoaderData()

  console.log(data);

  return (
    <section className="text-gray-600 body-font mt-4">
      <div className="container md:px-5 md:py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="md:text-4xl text-base font-bold text-center title-font mb-4 text-zinc-800"  data-aos="zoom-in">
            Discover Our Available Rooms Today
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-sm"> 
            Step into a world of comfort and luxury with our array of available
            rooms and suites, meticulously designed to cater to your every need.
            Whether you're planning a romantic getaway, a family vacation, or a
            solo adventure, 
          </p>
        </div>
        <div className=" grid md:grid-cols-4">
          {data?.map((rooms) => (
            <div
              key={rooms._id}
              className=" p-4 hover:scale-105 duration-200"
              data-aos="zoom-in">
              <div className="flex relative" >
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                  src={rooms.roomImages[2]}
                />

                <div className="md:px-8 md:py-10 flex justify-center items-center  relative h-48 z-10 w-full border-4 border-gray-200 duration-300  opacity-0 hover:opacity-100 ">
               
                  <div className="hover:shadow-xl">
                    <h2 className="tracking-widest text-xl title-font font-medium text-green-400 mb-1 drop-shadow-2xl dro">
                      {rooms.roomType}
                    </h2>
                    <Link to={`/roomsDeities/${rooms._id}`} className="text-green-400 text-sm border py-1 px-2 shadow-2xl">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvalableRooms;
