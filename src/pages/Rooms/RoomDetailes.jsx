import Navber from "../../components/Navber";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useLoaderData, useLocation, useNavigation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";


const RoomDetailes = () => {
  const { user } = useAuth();
  const room = useLoaderData();
  const [booked, setBooked] = useState([]);
  let count = 1;
  const navigate = useNavigation()
  const [date, setDate] = useState(0)
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
    e.preventDefault()
    const date = e.target.date.value; 
    console.log(date);
   
  }

  return (
    <div>
      <Navber></Navber>
      <div className="max-w-7xl m-auto grid grid-cols-12 gap-4 mt-3">
        <div className=" col-span-8">
          <div className="">
            <img className="" src={roomImages[0]} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6 ">
            <img className="h-full" src={roomImages[1]} alt="" />
            <img className="h-full" src={roomImages[2]} alt="" />
          </div>
          <p>{roomType}</p>
          <p>{description}</p>
          <div className="grid grid-cols-3 gap-4 py-6">
            {features.map((feature) => (
              <div key={feature} className="bg-slate-300">
                <p className="py-3 pl-2">
                  {count++}. {feature}
                </p>
              </div>
            ))}
          </div>
          <p>Price Per Night: ${pricePerNight}</p>
          <p>Room Side: {roomSize}</p>
          <p>
            {" "}
            Room Availability: {availability ? "Available" : "Unavailable"}
          </p>
          <p>
            {specialOffers
              ? `Discount: ${specialOffers.discountPercentage} %`
              : ""}
          </p>
        </div>

        {/* right side */}

        <form onSubmit={handlesubmitBooking} className="col-span-4 bg-slate-300" action="">
          <div >
            <p>{roomType}</p>
            <p>Price Per Night: {pricePerNight}</p>
            <p>Room Side: {roomSize}</p>
            <p> Availability: {availability ? "Available" : "Unavailable"}</p>
            <input onChange={(e)=> setDate(e.target.value)} className="block" type="date" name="date"  />
            <input className="btn" type="submit" value="Book Now" />

           {/* <input type="submit">
            Book Now</input>  */}

           <Link to={`/bookingDetiles/${_id}`} type="submit">
            Book Now</Link> 
            
            
            </div>
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
