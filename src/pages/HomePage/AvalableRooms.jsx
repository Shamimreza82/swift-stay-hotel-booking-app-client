import React from "react";
import useRooms from "../../Hooks/useRooms";
import { Link } from "react-router-dom";

const AvalableRooms = () => {
  const { data } = useRooms();


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data?.map((rooms) => (
            <div key={rooms._id} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center brightness-50 hover:brightness-95 "
                  src={rooms.roomImages[2]}
                />
            
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 duration-300  opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-medium text-white mb-1 dro">
                    {rooms.roomType}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <Link to={`/roomsDeities/${rooms._id}`} className=" btn">Book Now</Link>
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
