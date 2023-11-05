import React, { useEffect, useState } from "react";
import Navber from "../../components/Navber";
import useAxiosRoute from "../../Hooks/useAxiosRoute";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";

const MyBookings = () => {
  const axiosSecure = useAxiosRoute();
  const { user } = useAuth();
  const [myBooking, setMybooking] = useState([]);

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

  return (
    <div>
      <Navber></Navber>
      <div className=" max-w-7xl m-auto grid grid-cols-12">
        <div className="bg-slate-200 col-span-8 mt-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Room Image</th>
                <th>User</th>
                <th>Price</th>
                <th>Delete Booking</th>
              </tr>
            </thead >
            {data?.data.map((booking) => (
              <tbody key={booking._id}>
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
                        <div className="text-sm opacity-50">Brazil</div>
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
                  <td>$  {booking.pricePerNight}</td>
                  <th>
                    <button onClick={()=>handelDeletebooking(booking._id)} className="btn btn-ghost btn-xs">X</button>
                  </th>
                </tr>
              </tbody>
            ))}
            {/* foot */}
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MyBookings;
