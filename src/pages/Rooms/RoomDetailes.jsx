import Navber from "../../components/Navber";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const RoomDetailes = () => {
  const { user } = useAuth();
  const room = useLoaderData();
  const [booked, setBooked] = useState([]);
  let count = 1;
  const navigate = useNavigation();
  const [date, setDate] = useState(0);
  console.log(date);
  // const location = useLocation()

  // useEffect(() => {
  //   axios.get("http://localhost:5000/booking").then((res) => {
  //     setBooked(res.data);
  //   });
  // }, []);

  // const bookedName = booked.map((book) => book.roomType == room.roomType);
  // console.log(bookedName);

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

  // const handelbooking = () => {
  //   const booking = {
  //     name: user?.displayName,
  //     roomType: roomType,
  //     email: user?.email,
  //     roomImages: roomImages[0],
  //     pricePerNight: pricePerNight,
  //     availability: false,
  //     description,
  //     roomSize,
  //     specialOffers,
  //     features,
  //   };

  //   if (bookedName.includes(true)) {
  //     return Swal.fire("Already Booked", "Try another ", "error");
  //   }

  //   axios
  //     .post("http://localhost:5000/api/v1/booking", booking, {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data.acknowledged) {
  //         Swal.fire("Booking Successful", "You clicked my booking ", "success");

  //       }
  //     });
  // };

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
          {/* <p> <strong>Price Per Night: </strong>${pricePerNight}</p>
          <p> <strong>Room Side:</strong> {roomSize}</p>
          <p>
            {" "}
            <strong>Room Availability:</strong> {availability ? "Available" : "Unavailable"}
          </p>
          <p className="text-red-500">
            {specialOffers
              ? `Discount: ${specialOffers.discountPercentage} %`
              : ""}
          </p> */}
        </div>

        {/* right side */}

        <form onSubmit={handlesubmitBooking} className="col-span-4  " action="">
          <div className="p-8 bg-slate-300 rounded-md space-y-3">
            <p className="font-bold text-3xl">{roomType}</p>
            <p>Price Per Night: ${pricePerNight}</p>
            <p>Room Side: {roomSize}</p>
            <p> Availability: {availability ? "Available" : "Unavailable"}</p>

            {/* <input type="submit">
            Book Now</input>  */}

            <Link
              className="btn bg-green-500 border-none text-white"
              to={`/bookingDetiles/${_id}`}
              type="submit"
            >
              Book Now
            </Link>
          </div>
          <form className="bg-slate-400 mt-6" action="">
            <div>
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </form>
        </form>
        {/*            
                    <button  className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Now</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{roomType}</h3>
                        <img className='rounded-lg' src={roomImages[0]} alt="" />
                        <p>Price Per Night: {pricePerNight}</p>
                    <p>Room Side: {roomSize}</p>
                        <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
        {/* <button className="btn">Book Leter</button>
                            <button className="btn">Prossed</button>
                        </form> */}
        {/* <button  className='btn'>Pressed</button> */}
        {/* </div>
                    </div>
                    </dialog> */}
      </div>
    </div>
  );
};

export default RoomDetailes;
