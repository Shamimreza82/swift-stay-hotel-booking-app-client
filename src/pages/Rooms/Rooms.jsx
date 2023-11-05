
import { useEffect, useState } from 'react';
import Navber from '../../components/Navber';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Rooms = () => {

    const [roomsAll, setrRooms] = useState([])
    const [price, setPrice] = useState(roomsAll)
    console.log(price);

    useEffect(()=>{
                axios.get(`http://localhost:5000/api/v1/rooms?sortField=pricePerNight&sortOrder=${price}`)
                .then(res => {
                    setrRooms(res.data);
                })
    },[price])

    // const {data: rooms, isLoading, error, refetch} = useQuery({
    //     queryKey: ['rooms',price ], 
    //     queryFn: async ()=> {
    //        const res = await axios.get(`http://localhost:5000/api/v1/rooms?sortField=pricePerNight&sortOrder=${price}`)
    //        return res
    //     }
    // })

    // if(isLoading){
    //     return <div>Loading........</div>
    // }


    const handlePriceSet = (e) => {
        e.preventDefault()
         setPrice(e.target.value)
    }

    return (
        <div>
            
            <Navber></Navber>
            <div className='max-w-7xl m-auto grid md:grid-cols-10 mt-5 gap-4 '>
                <div className=' col-span-7'>
                    
                <div className='py-3 border mb-3'>
                            <select onChange={handlePriceSet} name="" id="" className='border ml-3 p-2'>
                                <option value="asc">High to Low</option>
                                <option value="desc">Low to High</option>
                            </select>
                        </div>
                    <div className='grid grid-cols-2 gap-5'>
                        
                        {
                            roomsAll?.map(rooms => 
                            <Link to={`/roomsDeities/${rooms?._id}`}  key={rooms?._id}>  
                                <img src={rooms?.roomImages[0]} alt="" />
                                <p>{rooms?.specialOffers?.discountPercentage}</p>
                            </Link> )
                        }
                    </div>
                </div>
                <div className='col-span-3 bg-slate-200'>
                        
                </div>
            </div>
        </div>
    );
};

export default Rooms;