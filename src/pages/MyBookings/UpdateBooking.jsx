import Navber from '../../components/Navber';
import { Link } from 'react-router-dom';

const UpdateBooking = () => {
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
                <th>Booking Date</th>
                <th>Price</th>
                <th>Update Booking</th>
                <th>Cancel Booking</th>
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
                  <td>
                    {booking.date}
                  </td>
                  <td>$  {booking.pricePerNight}</td>
                  <th>
                    <Link to={`/updateBooking/${booking._id}`} className="btn btn-ghost btn-xs">Update</Link>
                  </th>
                  <th>
                    <button onClick={()=>handelDeletebooking(booking._id)} className="btn btn-ghost btn-xs">Cancel</button>
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

export default UpdateBooking;