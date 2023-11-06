
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import Navber from '../../components/Navber';


const BookingDetiles = () => {
    const { user } = useAuth();
    const booking = useLoaderData()
    console.log(booking);
    const room = useLoaderData();
    const [date, setDate] = useState(0)


  console.log(date);
    const [booked, setBooked] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/booking").then((res) => {
          setBooked(res.data);
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
      e.preventDefault()
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





    return (
        <div>
            <Navber></Navber>

            <div >
              <form onSubmit={handelbooking} action="">
                 <img className='h-40' src={roomImages} alt="" />
                 <input type="date"  onChange={(e)=> setDate(e.target.value)} />
                  <input className='btn' type="submit" value="Prosseed" />
              </form>
                
            </div>
        </div>
    );
};

export default BookingDetiles;