import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Navber from "../../components/Navber";
import Reating from "../../components/Reating";
import moment from "moment/moment";

const BookingDetiles = () => {
  const { user } = useAuth();
  const booking = useLoaderData();
  console.log(booking);
  const room = useLoaderData();
  const [date, setDate] = useState(0);
  const [rating, setrating] = useState([])
  console.log(rating);

  console.log(date);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/booking").then((res) => {
      setBooked(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/ratings").then((res) => {
      setrating(res.data);
    });
  }, []);



  const bookedName = booked.map((book) => book.roomType == room.roomType);
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
      return Swal.fire("Already Booked", "Try another ", "error");
    }

    axios
      .post("http://localhost:5000/api/v1/booking", booking, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire("Booking Successful", "You clicked my booking ", "success");
        }
      });
  };



  const handelReview = e => {
    e.preventDefault()

  
    const name = e.target.name.value
    const rating = e.target.rating.value
    const text = e.target.text.value

    const review = {
      name, 
      rating, 
      text
    }
    console.log(review);

    axios.post('http://localhost:5000/rating',review, {withCredentials: true} )
    .then(res => {
      console.log(res.data);
    })
  }

  return (
    <div>
      <Navber></Navber>

      <div className="max-w-7xl m-auto grid grid-cols-12 gap-5 mt-7 ">
        <div className="col-span-8 bg-slate-200 rounded-md">
          <img className="rounded-md" src={roomImages} alt="" />
          <form className="ml-7" onSubmit={handelbooking} action="">
            <p className="font-bold text-3xl mt-7">{roomType}</p>
            <p>Price Per Night: ${pricePerNight}</p>
            <p>Room Side: {roomSize}</p>
            <p> Availability: {availability ? "Available" : "Unavailable"}</p>
            <input
              className="block py-3 px-4 my-3 rounded-md "
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              className="btn mb-5 bg-green-500 text-white"
              type="submit"
              value="Book Now"
            />
          </form>
        </div>
        <div className="col-span-4  rounded-md">
          <p className="text-center text-xl mt-2">Review</p>
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
            </div>
      {/* Ratting */}

          <div className="bg-slate-100 mt-5 p-4">
            <div className="flex gap-4">
              <img className="rounded-full h-16" src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMjFfM2RfcmVuZGVyX2NoYXJhY3Rlcl9vZl9hX3N0cmVzc2VkX2J1c2luZXNzX21hbl9kMDk1ZDQ3NC0zYmI0LTQ0MzItYTJhYS1lMDZhMTg2MjAzZDUucG5n.png" alt="" />
              <div>
                    <p> Name </p>
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
              <p className="ml-16 mt-6">AAAAAAAAAAAAAAAAAAAA</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingDetiles;
