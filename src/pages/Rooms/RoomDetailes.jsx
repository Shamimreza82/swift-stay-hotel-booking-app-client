import Navber from "../../components/Navber";
import axios from "axios";
import {
  Link,
  useLoaderData,

} from "react-router-dom";


import { useEffect, useState } from "react";
import moment from "moment";

const RoomDetailes = () => {
 
  const room = useLoaderData();
  const [rating, setrating] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:5000/ratings")
    .then((res) => {
      setrating(res.data);
    });


    console.log(rating);

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

  return (
    <div>
      <Navber></Navber>
      <div className="max-w-7xl m-auto text-center text-4xl py-10 border-b border-t mt-16">
        <p>
          <span className="font-bold">Discover Our Exquisite Collection</span>{" "}
          <br />{" "}
          <span className="text-2xl">of Distinguished Suites and Rooms</span>
        </p>
      </div>
      <div className="max-w-7xl m-auto grid md:grid-cols-12 gap-4 mt-5">
        <div className=" col-span-8">
          <div className="">
            <img className="" src={roomImages[0]} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6 ">
            <img className="h-full" src={roomImages[1]} alt="" />
            <img className="h-full" src={roomImages[2]} alt="" />
          </div>
          <p className="text-2xl py-2 font-bold">{roomType}</p>
          <p>{description}</p>
          <div className="grid md:grid-cols-3 gap-4 py-6">
            {features.map((feature) => (
              <div key={feature} className="bg-green-300 rounded-md">
                <p className="py-3 pl-2">{feature}</p>
              </div>
            ))}
          </div>
        
        </div>

        {/* right side */}

        <form onSubmit={handlesubmitBooking} className="col-span-4  " action="">
          <div className="p-8 bg-slate-300 rounded-md space-y-3">
            <p className="font-bold text-3xl">{roomType}</p>
            <p>Price Per Night: ${pricePerNight}</p>
            <p>Room Side: {roomSize}</p>
            <p> Availability: {availability ? "Available" : "Unavailable"}</p>
            <Link
              className="btn bg-green-500 border-none text-white"
              to={`/bookingDetiles/${_id}`}
              type="submit"
            >
              Book Now
            </Link>
          </div>
          <form className=" mt-6" action="">
            <div>
            {
            rating.map(ratin => 
              <div key={ratin._id} className="bg-slate-100 mt-5 p-4  rounded-md">
            <div className="flex gap-4">
              <img className="rounded-full h-16" src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMjFfM2RfcmVuZGVyX2NoYXJhY3Rlcl9vZl9hX3N0cmVzc2VkX2J1c2luZXNzX21hbl9kMDk1ZDQ3NC0zYmI0LTQ0MzItYTJhYS1lMDZhMTg2MjAzZDUucG5n.png" alt="" />
              <div>
                    <p>{ratin.name}</p>
                    <div className="rating rating-md">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  </div>
                  <p className="text-sm">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
              </div>
            </div>
              <p className="ml-20 mt-6">{ratin.text}</p>
          </div>
              
              )
          }
            </div>
          </form>
        </form>
       
      </div>
    </div>
  );
};

export default RoomDetailes;
