import React, { useEffect, useState } from "react";
import Navber from "../../components/Navber";
import useAxiosRoute from "../../Hooks/useAxiosRoute";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";
import Footer from "../HomePage/Footer";
import moment from "moment";

const MyBookings = () => {
  const axiosSecure = useAxiosRoute();
  const { user } = useAuth();
  const [myBooking, setMybooking] = useState([]);
  const [booked, setBooked] = useState([]);

  console.log(myBooking);

  const {data, isLoading, error, refetch} = useQuery({
    queryKey: ['booking'], 
    queryFn: async () => {
        const res = await axiosSecure.get(`/bookings?email=${user?.email}`)
        return res
    }
  })

console.log(data?.data);

//   useEffect(() => {
//     axiosSecure.get(`/bookings?email=${user?.email}`).then((res) => {
//       setMybooking(res.data);
//     });

//   }, [axiosSecure, user?.email]);

  const handelDeletebooking = (_id) => {
    console.log(_id);

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            axios.delete(`http://localhost:5000/api/v1/deleteBooking/${_id}`)
            .then(res => {
                console.log(res);
                refetch()
            })

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

  }

  const handelupdate = (id) => {
    axios.delete(`http://localhost:5000/api/v1/deleteBooking/${id}`)
    .then(res => {
        console.log(res.data);
        
    })
  }

  useEffect(() => {
    axios.get("http://localhost:5000/booking").then((res) => {
      setBooked(res.data);
    });
  }, []);
    
  console.log(booked);


  const handelCanelBooking = (date) => {
    console.log(date);
    
    const bookingDate = moment(date)
    const cancellationLimit = bookingDate.clone().subtract(1, 'days');
    
    const currentDate = moment()
    if(currentDate.isBefore(cancellationLimit)){
      console.log('You can cancel the booking before', cancellationLimit.format('YYYY-MM-DD'));
      Swal.fire({
        title: "Your Booking cancel",
        icon: "success"
      });
    } else {
      console.log('Cancellation period has passed. You cannot cancel the booking anymore.');
      Swal.fire({
        title: "Cancellation period has passed",
        text: "You cannot cancel the booking anymore.",
        icon: "error"
      });
    }
  }


  return (
    <div>
      <Navber></Navber>
      <div className=" max-w-7xl  m-auto grid grid-cols-12 h-screen">
        <div className=" col-span-8 mt-5">
          <table className="table">
            {/* head */}
            <thead className="">
              <tr className="bg-slate-300 text-zinc-700 rounded-md space-x-2"> 
                <th>Room Image</th>
                <th>User</th>
                <th>Booking Date</th>
                <th className="px-7">Price</th>
                <th>Update Booking</th>
                <th>Cancel Booking</th>
                <th>Delete Booking</th>
              </tr>
            </thead >
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
                  <td>
                    {booking.date}
                  </td>
                  <td>$  {booking.pricePerNight}</td>
                  <th>
                    <button onClick={handelupdate}  className="btn-ghost btn-xs bg-green-600 rounded-sm text-white">Update</button>
                  </th>
                  <th>
                    <button onClick={()=>handelCanelBooking(booking.date)}  className="btn-ghost btn-xs bg-yellow-500 rounded-sm text-white">Cancel</button>
                  </th>
                  <th>
                    <button onClick={()=>handelDeletebooking(booking._id)} className=" btn-ghost btn-xs bg-red-500 rounded-sm text-white">Delete</button>
                  </th>
                </tr>
              </tbody>
            ))}
            {/* foot */}
          </table>
        </div>
        <div></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyBookings;
