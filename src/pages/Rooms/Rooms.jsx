import { useEffect, useState } from "react";
import Navber from "../../components/Navber";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Rooms = () => {
  const [roomsAll, setrRooms] = useState([]);
  const [price, setPrice] = useState(roomsAll);
  console.log(price);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/v1/rooms?sortField=pricePerNight&sortOrder=${price}`
      )
      .then((res) => {
        setrRooms(res.data);
      });
  }, [price]);

  console.log(roomsAll);


  // const {data: rooms, isLoading, error, refetch} = useQuery({
  //     queryKey: ['rooms',price ],
  //     queryFn: async ()=> {
  //        const res = await axios.get(`http://localhost:5000/api/v1/rooms?sortField=pricePerNight&sortOrder=${price}`)
  //        return res
  //     }
  // })

  // if(isLoading){
  //     return <div>Loading........</div>
  // }

  const handlePriceSet = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  return (
    <div>
      <Navber></Navber>
      <p className="max-w-7xl m-auto text-center py-5 md:text-2xl font-bold mt-6">
        <span className="md:text-3xl text-xl">Explore Our Available Rooms</span>{" "}
        <br /> for Your Perfect Getaway
      </p>
      <p className="max-w-4xl m-auto text-sm text-center ">
        "Browse through our selection of meticulously curated rooms and suites,
        each designed to cater to your unique preferences and needs. Whether
        you're seeking a cozy retreat or an indulgent escape,
      </p>
      <div className=" border mb-3 rounded-md max-w-7xl m-auto mt-5">
        <select
          onChange={handlePriceSet}
          name=""
          id=""
          className="border py-3 rounded-md text-sm"
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
      <div className="max-w-7xl m-auto grid md:grid-cols-10 mt-5 gap-4 ">
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
                  <div className="flex justify-between py-3 px-1 bg-slate-200 rounded-b-md ">
                    <p className="font-bold text-gray-700">{rooms?.roomType}</p>
                    <p>${rooms?.pricePerNight}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-3 bg-slate-200">all</div>
      </div>
    </div>
  );
};

export default Rooms;
