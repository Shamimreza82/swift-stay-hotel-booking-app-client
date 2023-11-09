import { useEffect, useState } from "react";
import Navber from "../../components/Navber";
import axios from "axios";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Footer from "../HomePage/Footer";
import { Helmet } from "react-helmet";

const Rooms = () => {
  const [roomsAll, setrRooms] = useState([]);
  const [price, setPrice] = useState(roomsAll);
  const [reviews, setReviews] = useState([])

  console.log(price);

  useEffect(() => {
    axios
      .get(
        `https://hotel-management-server-three.vercel.app/api/v1/rooms?sortField=pricePerNight&sortOrder=${price}`
      )
      .then((res) => {
        setrRooms(res.data);
      });
  }, [price]);

  console.log(roomsAll);

  useEffect(() => {
    axios.get("https://hotel-management-server-three.vercel.app/ratings").then((res) => {
      setReviews(res.data);
    });
  }, []);

  console.log(reviews.length);

  const handlePriceSet = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };


  const sumofAll = roomsAll.reduce((a, b) => a + b.reviews, 0)
 


  return (
    <div className="bg-gray-50">
      <Helmet> <title>SwiftStay | Rooms</title></Helmet>
      <Navber></Navber>
      <p className="max-w-7xl m-auto text-center py-5 md:text-2xl font-bold mt-6">
        <span className="md:text-4xl text-zinc-800 text-xl">Explore Our Available Rooms</span>
        <br /> for Your Perfect Getaway
      </p>
      <p className="max-w-4xl m-auto text-sm text-center ">
        "Browse through our selection of meticulously curated rooms and suites,
        each designed to cater to your unique preferences and needs. Whether
        you're seeking a cozy retreat or an indulgent escape,
      </p>
      <p className="text-right max-w-7xl "> Total Reviews: {sumofAll}</p>
      <div className=" border border-green-500 mb-3 p-1 rounded-md max-w-7xl m-auto mt-5">
        <select
          onChange={handlePriceSet}
          name=""
          id=""
          className="border py-2 rounded-md text-sm p-2"
        >
          <option value="asc">Low to high</option>
          <option value="desc">High to low</option>
          
        </select>
        
      </div>
      <Marquee>
        {
            roomsAll.map(feture => 
            <div key={feture._id} className="ml-5">
                <p className="text-gray-500 font-bold">{feture.features[0]},</p>
            </div>)
        }
        </Marquee>
      <div className="max-w-7xl m-auto  mt-5 gap-4 ">
        <div className=" col-span-7">
          <div className="grid md:grid-cols-3 gap-5 px-2 ">
            {roomsAll?.map((rooms) => (
              <Link
                className="hover:scale-105 duration-300 "
                to={`/roomsDeities/${rooms?._id}`}
                key={rooms?._id}
              >
                <div className="relative">
                  <img
                    className="rounded-t-md hover:brightness-75 duration-700  "
                    src={rooms?.roomImages[0]}
                    alt=""
                  />
                  {/* <p className="absolute bottom-5 text-xl text-red-600 font-bold shadow-2xl p-2">
                  {rooms.specialOffers ? `Discount: ${rooms.specialOffers.discountPercentage} %`:''}</p> */}
                  <div className="flex justify-between py-3 px-4 bg-slate-100 rounded-b-md  border-b-green-600 border">
                    <div className="flex  justify-between gap-2">
                    <p className="font-bold text-zinc-800">{rooms?.roomType}</p>
                    <p className="text-red-600 font-bold text-sm">(${rooms?.pricePerNight})</p>
                    </div>
                    <div>
                    <p className="font-bold text-gray-500">Reviews {rooms.reviews}</p>
                  </div>
                  </div>
                  
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* <div className="col-span-3 bg-slate-200">all</div> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Rooms;
