import React, { useEffect, useState } from "react";
import Navber from "../../components/Navber";
import useAxiosRoute from "../../Hooks/useAxiosRoute";
import useAuth from "../../Hooks/useAuth";

const MyBookings = () => {
  const axiosSecure = useAxiosRoute();
  const { user } = useAuth();
  const [myBooking, setMybooking] = useState([]);

  console.log(myBooking);
  useEffect(() => {
    axiosSecure.get(`/bookings?email=${user?.email}`).then((res) => {
      setMybooking(res.data);
    });
  }, [axiosSecure, user?.email]);

  const {_id, name, email, roomType, pricePerNight, availability, roomImages,} = myBooking; 
  console.log(name);

  return (
    <div>
      <Navber></Navber>
      <div className=" max-w-7xl m-auto grid grid-cols-12">
        <div className="bg-slate-200 col-span-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Room Image</th>
                <th>User</th>
                <th>Price</th>
                <th>Delete Booking</th>
              </tr>
            </thead>
            {myBooking.map((booking) => (
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
                    <button className="btn btn-ghost btn-xs">X</button>
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
