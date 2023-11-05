import { useEffect, useState } from "react";
import Navber from "../../components/Navber";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

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
      <p className="max-w-7xl m-auto text-center py-5 text-2xl font-bold mt-6">
        <span className="text-3xl">Explore Our Available Rooms</span> <br /> for Your Perfect Getaway
      </p>
      <p className="max-w-4xl m-auto ">
        "Browse through our selection of meticulously curated rooms and suites,
        each designed to cater to your unique preferences and needs. Whether
        you're seeking a cozy retreat or an indulgent escape, 
      </p>

      <div className="max-w-7xl m-auto grid md:grid-cols-10 mt-5 gap-4 ">
        <div className=" col-span-7">
          <div className="py-3 border mb-3">
            <select
              onChange={handlePriceSet}
              name=""
              id=""
              className="border ml-3 p-2"
            >
              <option value="asc">High to Low</option>
              <option value="desc">Low to High</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {roomsAll?.map((rooms) => (
              <Link to={`/roomsDeities/${rooms?._id}`} key={rooms?._id}>
                <img src={rooms?.roomImages[0]} alt="" />
                <p>{rooms?.specialOffers?.discountPercentage}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-3 bg-slate-200"></div>
      </div>
    </div>
  );
};

export default Rooms;
