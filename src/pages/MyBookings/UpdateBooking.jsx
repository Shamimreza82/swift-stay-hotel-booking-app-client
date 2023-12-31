import { useEffect, useState } from 'react';
import Navber from '../../components/Navber';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';



const UpdateBooking = () => {

    const {id} = useParams()
    const singelBooking = useLoaderData()
    const [date, setDate] = useState()
    const navigate = useNavigate()
    const [bookings, setBookings] =useState([])
     
    useEffect(()=>{
      axios.get('https://hotel-management-server-three.vercel.app/booking')
      .then(res => {
        setBookings(res.data)
      })
    },[])

    const fineBookingdate = bookings.map(booking => booking.date == date)
    console.log(fineBookingdate);

 
   
   
    const updateBookingDate = () => {

      const fineBookingdate = bookings.map(booking => booking.date == date)
      console.log(fineBookingdate);

      console.log(fineBookingdate);
      if(fineBookingdate.includes(true) === true){
 
      return  Swal.fire({
          title: "Room Already book in this date",
          text: "Please try anther date",
          icon: "error"
        });
     }

     
      axios.put(`https://hotel-management-server-three.vercel.app/booking/${id}`, {date} )
      .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount === 1) {
          Swal.fire({
            title: "update successfully",
            text: "Please Check My Booking ",
            icon: "success"
          });
          navigate('/myBookings')
        }
      })

    }


    return (
        <div className=''>
          <Helmet> <title>SwiftStay | Update Booking</title></Helmet>
      <Navber></Navber>
      <p className='md:text-2xl mt-10 pb-2 text-center border-b'>Update Your Booking</p>
      <div className=" max-w-7xl m-auto ">
        
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
              
              </tr>
            </thead >
            
              <tbody >
                <tr>

                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className=" w-20 h-20">
                          <img
                            src={singelBooking.roomImages}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{singelBooking.roomType}</div>
                        <div className="text-sm opacity-50">Brazil</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {singelBooking.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                    {singelBooking.email}
                    </span>
                  </td>
                  <td>
                     <input className='p-2 rounded-md bg-red-200 text-red-600 font-bold' defaultValue={singelBooking.date} onChange={(e)=> setDate(e.target.value)} type="date" name="" id="" />
                  </td>
                  
                  <td>$  {singelBooking.pricePerNight}</td>
                  <th>
                    <button onClick={updateBookingDate} className="p-2 rounded-md bg-green-200 btn-sm text-green-600 font-bold">Update</button>
                  </th>
                
                </tr>
              </tbody>
      
            {/* foot */}
          </table>
        </div>
        <div></div>
      </div>
    </div>
    );
};

export default UpdateBooking;