import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useRooms = () => {
    
    const {data, isLoading, } = useQuery({
        queryKey: ['rooms'], 
        queryFn: async () => {
             const res = await axios('http://localhost:5000/api/v1/rooms')
             return await res.data
        }
    })

    return {data, isLoading}
};

export default useRooms;