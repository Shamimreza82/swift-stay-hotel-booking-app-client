
import { useEffect, useState } from 'react';
import Navber from '../../components/Navber';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Rooms = () => {

    const {data, isLoading, error, refetch} = useQuery({
        queryKey: ['rooms'], 
        queryFn: async ()=> {
           const res = await axios.get('http://localhost:5000/api/v1/rooms')
           return res
        }
    })

    if(isLoading){
        return <div>Loading........</div>
    }

 console.log(data.data);


    return (
        <div>
            
            <Navber></Navber>
            <div className='max-w-7xl m-auto grid md:grid-cols-10 mt-5 gap-4 '>
                <div className='bg-slate-200 col-span-7'>
                    <div className='grid grid-cols-2 gap-5'>
                        {
                            data?.data?.map(rooms => <img src={rooms.roomImages[0]} alt="" />)
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