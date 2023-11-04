import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {

    const {user, isLodeing } = useAuth()
    const location = useLocation()
    console.log(location);

    if(isLodeing){
        return <div> Loading..........</div>
    }

    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }


    return children
};

export default PrivateRoute;