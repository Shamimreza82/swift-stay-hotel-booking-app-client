import axios from 'axios';
import { useEffect } from 'react';


const instance = axios.create({
    baseURL: 'https://hotel-management-server-three.vercel.app/api/v1', 
    withCredentials: true
})

const useAxiosRoute = () => {
    
    useEffect(()=>{
        axios.interceptors.response.use(function (response) {
            return response;
          }, function (error) {

            
            console.log("error track in interseptor",error.response);
          });
    },[])

    return instance
};

export default useAxiosRoute;