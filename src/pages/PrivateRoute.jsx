import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {

    const {user, isLodeing } = useAuth()
    const location = useLocation()

    if(isLodeing){
        return <div className="min-h-screen flex justify-center items-center"> <span className="loading loading-bars loading-lg"></span></div>
    }

    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }


    return children
};

export default PrivateRoute;