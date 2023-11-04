import Navber from '../../components/Navber';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';

const RoomDetailes = () => {
    const {id} = useParams()
    const room = useLoaderData()
    let count = 1

    const {data, isLoading, error, refetch} = useQuery({
        queryKey: ['rooms'], 
        queryFn: async ()=> {
           const res = await axios.get(`http://localhost:5000/api/v1/room/${id}`)
           return res
        }
    })
   console.log(data?.data);

   const {_id, roomType, description,pricePerNight, roomSize, availability, roomImages, specialOffers, features } = room
   console.log(roomImages);

   if(isLoading){
    return <div>Loading........</div>
}

    return (
        <div>
            <Navber></Navber>
            <div className='max-w-7xl m-auto grid grid-cols-12 gap-4 mt-3'>
                <div className=' col-span-8'>
                    <div className=''>
                        <img className='' src={roomImages[0]} alt="" />
                    </div>
                    <div className='grid grid-cols-2 gap-6 mt-6 '>
                        <img className='h-full' src={roomImages[1]} alt="" />
                        <img className='h-full' src={roomImages[2]} alt="" />
                    </div>
                    <p>{roomType}</p>
                    <p>{description}</p>
                    <div className='grid grid-cols-3 gap-4 py-6'>
                        {
                          features.map(feature => 
                            <div key={feature} className='bg-slate-300'>
                                <p className='py-3 pl-2' >{count++}. {feature}</p>
                            </div>
                            )  
                        }
                    </div>
                    <p>Price Per Night: {pricePerNight}</p>
                    <p>Room Side: {roomSize}</p>
                    <p> Availability: {availability ? "Available": "Unavailable"}</p>
                    <p>{specialOffers ? `Discount: ${specialOffers.discountPercentage} %`: ""}</p>
                    
                </div>
                <div className='col-span-4 bg-slate-300'>
                    <p>{roomType}</p>
                    <p>Price Per Night: {pricePerNight}</p>
                    <p>Room Side: {roomSize}</p>
                    <p> Availability: {availability ? "Available": "Unavailable"}</p>
                </div>
                
            </div>
            <div className='max-w-7xl m-auto '>
             <button className='btn'>Book Now</button>
            </div>
        </div>
    );
};

export default RoomDetailes;