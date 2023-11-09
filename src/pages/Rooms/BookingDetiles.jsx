import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Navber from "../../components/Navber";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Footer from "../HomePage/Footer";


const BookingDetiles = () => {
  const { user } = useAuth();
  const room = useLoaderData();
  const [date, setDate] = useState(0);
  const [booked, setBooked] = useState([]);



  useEffect(() => {
    axios.get("https://hotel-management-server-three.vercel.app/booking", {withCredentials: true})
       .then((res) => {
       setBooked(res.data);
    });
  }, []);


  const {data: bookedRoom, isLoading, error, refetch} = useQuery({
    queryKey: ['booking'], 
    queryFn: async () => {
        const res = await axios.get('https://hotel-management-server-three.vercel.app/booking')
        return res
    }
  })

 console.log(bookedRoom?.data);
 console.log(booked);

  const bookedName = bookedRoom?.data.map((book) => book.date === date);
  console.log(bookedName);
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

  const handelbooking = (e) => {
    e.preventDefault();
    const booking = {
      name: user?.displayName,
      roomType: roomType,
      email: user?.email,
      roomImages: roomImages[0],
      pricePerNight: pricePerNight,
      availability: false,
      description,
      roomSize,
      specialOffers,
      features,
      date,
    };

    if (bookedName.includes(true)) {
      return (
        Swal.fire( `Already Booked
          in this date 
        `, "Try another date", "error")
      ) 
     
    }

         axios.post("https://hotel-management-server-three.vercel.app/api/v1/booking", booking, {
        withCredentials: true,})
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire("Booking Successful", "Please Check My Bookings Section ", "success");
          refetch()
        }
      });
  };

  // const handelReview = (e) => {
  //   e.preventDefault();

  //   const name = e.target.name.value;
  //   const rating = e.target.rating.value;
  //   const text = e.target.text.value;

  //   const review = {
  //     name,
  //     rating,
  //     text,
  //   };
  //   console.log(review);

  //   axios
  //     .post("https://hotel-management-server-three.vercel.app/rating", review, { withCredentials: true })
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // };

  return (
    <div className="bg-gray-50 ">
      <Navber></Navber>
      <Helmet> <title>SwiftStay | Booking Deities</title></Helmet>
   
      <div className="max-w-7xl m-auto grid md:grid-cols-12 md:gap-5 mt-7 md:py-24 py-4 ">
        <div className="md:col-span-6  rounded-md">
          <img className="rounded-md" src={roomImages} alt="" />
        </div>

        <div className="col-span-4  rounded-md">
        <form className="ml-7"  onSubmit={handelbooking}  action="">
            <p className="font-bold text-3xl text-zinc-800 mt-7">{roomType}</p>
            <div className="space-y-2 mt-4">
              <p className="font-bold text-gray-700">Price Per Night: <span className="text-red-500">${pricePerNight}</span></p>
              <p className="font-bold text-gray-700">Room Size: {roomSize}</p>
              <p className="font-bold text-gray-700"> Availability:  <span className="text-green-600">{availability ? "Available" : "Unavailable"}</span></p>
            </div>
            <div className="flex items-center"> 
            <input
              className="block py-2 px-4 my-3 rounded-md border "
              type="date"
              required
              onChange={(e) => setDate(e.target.value)}
            /> 
            <p className="bg-red-200 p-1 rounded-md ml-5 text-red-600">Select Your Booking Date</p>
            </div>
            <input
              className="btn mb-5 bg-green-500 text-white"
              type="submit"
              value="Confirm Booking"
            />
          </form>
     
        {/* <p className="text-center text-xl mt-2 bg-slate-100 py-2 rounded-md">Review</p>
          {/* Ratting */}
          {/* {rating.map((ratin) => (
            <div key={ratin._id} className="bg-slate-100 mt-5 p-4  rounded-md">
              <div className="flex gap-4">

                <div>
                  <p>{ratin.name}</p>
                  <div className="rating rating-md">
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p className="text-sm">
                    {ratin.CurrentDate}
                  </p>
                </div>
              </div>
              <p className=" mt-4">{ratin.text}</p>
            </div>
          ))} */} 
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookingDetiles;
