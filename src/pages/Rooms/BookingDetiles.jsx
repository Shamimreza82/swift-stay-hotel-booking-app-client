import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Navber from "../../components/Navber";
import moment from "moment/moment";
import { useQuery } from "@tanstack/react-query";
import useAxiosRoute from "../../Hooks/useAxiosRoute";
import { Helmet } from "react-helmet";
import Footer from "../HomePage/Footer";


const BookingDetiles = () => {
  const { user } = useAuth();
  const room = useLoaderData();
  const [date, setDate] = useState(0);
  const [rating, setrating] = useState([]);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/booking", {withCredentials: true})
       .then((res) => {
       setBooked(res.data);
    });
  }, []);


  useEffect(() => {
    axios.get("http://localhost:5000/ratings").then((res) => {
      setrating(res.data);
    });
  }, []);

  const {data: bookedRoom, isLoading, error, refetch} = useQuery({
    queryKey: ['booking'], 
    queryFn: async () => {
        const res = await axios.get('http://localhost:5000/booking')
        return res
    }
  })

 console.log(bookedRoom?.data);
 console.log(booked);


  // console.log(booked);
  // console.log(room);
  // console.log(date);

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
        Swal.fire("Already Booked", "Try another ", "error")
        
      ) 
     
    }

    axios
      .post("http://localhost:5000/api/v1/booking", booking, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire("Booking Successful", "You clicked my booking ", "success");
          refetch()
        }
      });
  };

  const handelReview = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const rating = e.target.rating.value;
    const text = e.target.text.value;

    const review = {
      name,
      rating,
      text,
    };
    console.log(review);

    axios
      .post("http://localhost:5000/rating", review, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="bg-gray-50">
      <Navber></Navber>
      <Helmet> <title>SwiftStay | Booking Deities</title></Helmet>
      <div className="max-w-7xl m-auto grid md:grid-cols-12 md:gap-5 mt-7 ">
        <div className="md:col-span-8 bg-slate-200 rounded-md">
          <img className="rounded-md" src={roomImages} alt="" />
          <form className="ml-7"  onSubmit={handelbooking}  action="">
            <p className="font-bold text-3xl mt-7">{roomType}</p>
            <p>Price Per Night: ${pricePerNight}</p>
            <p>Room Side: {roomSize}</p>
            <p> Availability: {availability ? "Available" : "Unavailable"}</p>
            <label>
              
            </label>
            <div className="flex items-center">
            <input
              className="block py-3 px-4 my-3 rounded-md "
              type="date"
              required
              onChange={(e) => setDate(e.target.value)}
            /> 
            <p className="bg-red-200 p-2 ml-5 text-red-600">Select Your Booking Date</p>
            </div>
            <input
              className="btn mb-5 bg-green-500 text-white"
              type="submit"
              value="Book Now"
            />
          </form>


        </div>

        {/* Reveiew Section */}

        <div className="col-span-4  rounded-md">
        <p className="text-center text-xl mt-2 bg-slate-100 py-2 rounded-md">Review</p>
          {/* <p className="text-center text-xl mt-2">Review</p>
          <div className="bg-slate-200 mt-6 rounded-md" action="">
            <div>
              <form onSubmit={handelReview} className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="rating"
                    placeholder="rating"
                    className="input input-bordered"
                    required
                  />
                  <textarea
                    className="textarea textarea-accent mt-4"
                    placeholder="Whats your feedback"
                    name="text"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn mb-5 bg-green-500 text-white"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div> */}
          {/* Ratting */}
          {rating.map((ratin) => (
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
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookingDetiles;
