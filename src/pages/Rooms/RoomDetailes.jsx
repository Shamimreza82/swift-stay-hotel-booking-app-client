import Navber from "../../components/Navber";
import axios from "axios";
import {
  Link,
  useLoaderData,

} from "react-router-dom";


import { useEffect, useState } from "react";
import moment from "moment";
import Footer from "../HomePage/Footer";
import { Helmet } from "react-helmet";

const RoomDetailes = () => {
 
  const room = useLoaderData();
  const [rating, setrating] = useState([])
  
  useEffect(() => {
    axios.get("https://hotel-management-server-three.vercel.app/ratings")
    .then((res) => {
      setrating(res.data);
    });
  }, []);

  
  const {
    _id,
    roomType,
    description,
    pricePerNight,
    roomSize,
    availability,
    roomImages,
    specialOffers,
    features,
  } = room;

  

  const handlesubmitBooking = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    console.log(date);
  };

  console.log(rating);

  return (
    <div className="bg-gray-50 ">
      <Helmet> <title>SwiftStay | Rooms Deities</title></Helmet>
      <Navber></Navber>
      <div className="max-w-7xl m-auto text-center md:text-4xl text-xl py-10 border-b border-t mt-16 px-3 ">
        <p>
          <span className="font-bold text-zinc-800">Discover Our Exquisite Collection</span>
          <br />
          <span className="md:text-2xl">of Distinguished Suites and Rooms</span>
        </p>
      </div>
      <div className="max-w-7xl m-auto grid md:grid-cols-12 gap-4 mt-5 px-3">
        <div className=" md:col-span-8">
          <div className="">
            <img className="" src={roomImages[0]} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6 ">
            <img className="h-full" src={roomImages[1]} alt="" />
            <img className="h-full" src={roomImages[2]} alt="" />
          </div>
          <p className="text-2xl py-6 font-bold">{roomType}</p>
          <p className="text-gray-500">{description}</p>
          <div className="grid md:grid-cols-3 gap-4 py-10">
            {features.map((feature) => (
              <div key={feature} className="bg-green-500 rounded-md">
                <p className="py-3 pl-2 text-yellow-50">{feature}</p>
              </div>
            ))}
          </div>
        
        </div>

        {/* right side */}

        <form onSubmit={handlesubmitBooking} className="md:col-span-4 w-full " action="">
          
          <div className="p-8 bg-slate-100 rounded-md space-y-3">
            <p className="font-bold text-2xl">{roomType}</p>
            <p>Price Per Night: ${pricePerNight}</p>
            <p>Room Side: {roomSize}</p>
        
            <Link
              className="btn bg-green-500 border-none text-white"
              to={`/bookingDetiles/${_id}`}
              type="submit"
            >
              Book Room
            </Link>
          </div>
          <form className=" mt-6" action="">
          <p className="text-xl">Reviews: {rating.length}</p>
            <div>
            {
            rating.map(ratings => 
              <div key={ratings._id} className="bg-slate-100 mt-5 p-4  rounded-md">
            <div className="">

              <div>
                    <p className="font-bold text-zinc-800 my-2">{ratings.name}</p>
                    <div className="rating rating-sm">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  </div>
                  <p className="text-sm text-gray-500">{ratings.CurrentDate}</p>
              </div>
            </div>
              <p className=" mt-2 text-sm">{ratings.text}</p>
          </div>
              
              )
          }
            </div>
          </form>
        </form>
       
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RoomDetailes;
