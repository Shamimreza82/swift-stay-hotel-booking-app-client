import React from 'react';
import Navber from '../../components/Navber';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RoomDetailes = () => {
    const {id} = useParams()
  

    const {data, isLoading, error, refetch} = useQuery({
        queryKey: ['rooms'], 
        queryFn: async ()=> {
           const res = await axios.get(`http://localhost:5000/api/v1/room/${id}`)
           return res
        }
    })
   console.log(data?.data);

   if(isLoading){
    return <div>Loading........</div>
}

    return (
        <div>
            <Navber></Navber>
            <div className='max-w-7xl m-auto'>
                room Detiles
            </div>
           
        </div>
    );
};

export default RoomDetailes;