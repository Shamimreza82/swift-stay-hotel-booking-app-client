import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useRooms = () => {

    const [rooms, setRooms] = useState()

    useEffect(() => {
            axios.get('https://hotel-management-server-three.vercel.app/api/v1/rooms')
             .then(res => {
                setRooms(res.data)
             })
    },[])
    
    // const {data, isLoading, } = useQuery({
    //     queryKey: ['rooms'], 
    //     queryFn: async () => {
    //          const res = await axios.get('https://hotel-management-server-three.vercel.app/api/v1/rooms')
    //          return await res.data
    //     }
    // })

    return rooms
};

export default useRooms;