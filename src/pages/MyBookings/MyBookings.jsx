import React, { useEffect, useState } from "react";
import Navber from "../../components/Navber";
import useAxiosRoute from "../../Hooks/useAxiosRoute";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";
import Footer from "../HomePage/Footer";
import moment from "moment";
import { Link, json } from "react-router-dom";
import { Helmet } from "react-helmet";


const MyBookings = () => {
  const axiosSecure = useAxiosRoute();
  const { user } = useAuth();
  // const [myBooking, setMybooking] = useState([]);
  const [booked, setBooked] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newBooking, setNewBooking] = useState()
  const [success, setSuccess] = useState("")
  


  console.log(success);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user?.email}`);
      return res;
      // fetch(`https://hotel-management-server-three.vercel.app/bookings?email=${user?.email}`, {credentials: "include"})
      // .then(res => res.json())
      // .then(data => console.log(data))
    },
  });

 

  const handelDeletebooking = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://hotel-management-server-three.vercel.app/api/v1/deleteBooking/${_id}`)
          .then((res) => {
            console.log(res);
            refetch();
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
 

  useEffect(() => {
    axios.get("https://hotel-management-server-three.vercel.app/booking", {withCredentials: true})
      .then((res) => {
      setBooked(res.data);
    });
  }, []);
  

  useEffect(() => {
    axios.get("https://hotel-management-server-three.vercel.app/ratings").then((res) => {
      setReviews(res.data);
    });
  }, []);

  console.log(reviews);

  console.log(booked);



  const handelCanelBooking = (date, _id) => {
    console.log(date);
    
    

    const bookingDate = moment(date);
    const cancellationLimit = bookingDate.clone().subtract(1, "days");

    const currentDate = moment();
    if (currentDate.isBefore(cancellationLimit)) {
      setSuccess("cancel")
      Swal.fire({
        title: "Your Booking cancel",
        icon: "success",
      });

      
    } else {
     Swal.fire({
        title: "Cancellation period has passed",
        text: "You cannot cancel the booking anymore.",
        icon: "error",
      });

      axios.patch(`https://hotel-management-server-three.vercel.app/booking/${_id}`, {success: true})
      .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0) {
           console.log("allin one");
         
        } else {
           refetch()
        }
        
      })



    }
  };



  const handelReview = (e) => {
    e.preventDefault();
    const CurrentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    console.log(CurrentDate);
    const name = e.target.name.value;
    const rating = e.target.rating.value;
    const text = e.target.text.value;

    const review = {
      name,
      rating,
      text,
      CurrentDate,
    };
    console.log(review);

    axios
      .post("https://hotel-management-server-three.vercel.app/rating", review, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Thank you",
            text: "",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="bg-slate-100 overflow-x-hidden">
      <Helmet> <title>SwiftStay | My Booking</title></Helmet>
      <Navber></Navber>
      <p className='md:text-2xl mt-3 md:mt-10 pb-2 text-center border-b'>Manage Booking</p>
      
      <div className=" max-w-7xl min-h-screen py m-auto ">
        <div className=" mt-10">
          <table className="table md:w-20 m-auto object-center">
            {/* head */}
            <thead className="">
              <tr className="bg-slate-300 text-zinc-700 rounded-md ">
                <th>Room Image</th>
                <th>User</th>
                <th>Booking Date</th>
                <th className="px-7">Price</th>
                <th>Update Booking</th>
                <th className="px-10">Cancel Booking</th>
                <th>Delete Booking</th>
              </tr>
            </thead>
            {
        isLoading && <div className="flex justify-center">Loading.....</div>
      }
            {data?.data.map((booking) => (
              <tbody key={booking._id} className="bg-slate-200 ">
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className=" w-20 h-20">
                          <img
                            src={booking.roomImages}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{booking.roomType}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {booking.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {booking.email}
                    </span>
                  </td>
                  <td>{booking.date}</td>
                  <td>$ {booking.pricePerNight}</td>
                  <th>
                    <Link
                      to={`/updateBooking/${booking._id}`}
                      className="btn-ghost btn-xs bg-green-600 rounded-sm text-white"
                    >
                      Update
                    </Link>
                  </th>
                  <th >
                    {
                      success === "cancel" ? <span onClick={() => handelCanelBooking(booking.date, booking._id)} className="btn-ghost btn-xs bg-gray-400 rounded-sm text-white">Booking Cancel</span> : 
                      <button
                      onClick={() => handelCanelBooking(booking.date, booking._id)}
                      className="btn-ghost btn-xs bg-yellow-500 rounded-sm text-white"
                    >
                      Cancel
                    </button>
                    }
                     
                  </th>
                  <th>
                    <button
                      onClick={() => handelDeletebooking(booking._id)}
                      className=" btn-ghost btn-xs bg-red-500 rounded-sm text-white"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
            {/* foot */}
          </table>
        </div>
        <div className=" border mt-16 md:w-[50%] m-auto">
          <div className="flex justify-between p-4">
            <p className="text-xl">Reviews</p>
            <button
              className="btn-sm bg-green-600 rounded-md text-white"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Write a Review
            </button>
          </div>

          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form onSubmit={handelReview} className="card-body ">
                <div className="flex items-center mb-8">
                  <p className="text-xl">Write a review</p>
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className=" p-2 rounded-full bg-slate-100">
                      X
                    </button>
                  </form>
                </div>
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
              <div className="modal-action"></div>
            </div>
          </dialog>

          {/* Review Show */}
          <div>
            {reviews.map((review) => (
              <div key={review._id} className="border mx-4 my-3 p-3">
                <p className="text-base py-2">{review.name}</p>
                <div className="flex gap-4">
                  <div className="rating rating-sm mb-3">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p className="text-gray-600">{review.CurrentDate}</p>
                </div>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyBookings;
