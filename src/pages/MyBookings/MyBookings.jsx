import React, { useEffect, useState } from "react";
import Navber from "../../components/Navber";
import useAxiosRoute from "../../Hooks/useAxiosRoute";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";
import Footer from "../HomePage/Footer";
import moment from "moment";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyBookings = () => {
  const axiosSecure = useAxiosRoute();
  const { user } = useAuth();
  const [myBooking, setMybooking] = useState([]);
  const [booked, setBooked] = useState([]);
  const [reviews, setReviews] = useState([]);

  console.log(myBooking);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user?.email}`);
      return res;
    },
  });

  console.log(data?.data);

  //   useEffect(() => {
  //     axiosSecure.get(`/bookings?email=${user?.email}`).then((res) => {
  //       setMybooking(res.data);
  //     });

  //   }, [axiosSecure, user?.email]);

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
          .delete(`http://localhost:5000/api/v1/deleteBooking/${_id}`)
          .then((res) => {
            console.log(res);
            refetch();
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  // const handelupdate = (id) => {
  //   axios
  //     .delete(`http://localhost:5000/api/v1/deleteBooking/${id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // };

  useEffect(() => {
    axios.get("http://localhost:5000/booking").then((res) => {
      setBooked(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/ratings").then((res) => {
      setReviews(res.data);
    });
  }, []);

  console.log(reviews);

  console.log(booked);

  const handelCanelBooking = (date) => {
    console.log(date);

    const bookingDate = moment(date);
    const cancellationLimit = bookingDate.clone().subtract(1, "days");

    const currentDate = moment();
    if (currentDate.isBefore(cancellationLimit)) {
      console.log(
        "You can cancel the booking before",
        cancellationLimit.format("YYYY-MM-DD")
      );
      Swal.fire({
        title: "Your Booking cancel",
        icon: "success",
      });
    } else {
      console.log(
        "Cancellation period has passed. You cannot cancel the booking anymore."
      );
      Swal.fire({
        title: "Cancellation period has passed",
        text: "You cannot cancel the booking anymore.",
        icon: "error",
      });
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
      .post("http://localhost:5000/rating", review, { withCredentials: true })
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
    <div className="bg-slate-100">
      <Helmet> <title>SwiftStay | My Booking</title></Helmet>
      <Navber></Navber>
      <div className=" max-w-7xl min-h-screen py m-auto">
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
                <th>Cancel Booking</th>
                <th>Delete Booking</th>
              </tr>
            </thead>
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
                  <th>
                    <button
                      onClick={() => handelCanelBooking(booking.date)}
                      className="btn-ghost btn-xs bg-yellow-500 rounded-sm text-white"
                    >
                      Cancel
                    </button>
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
