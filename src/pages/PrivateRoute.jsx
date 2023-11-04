import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PrivateRoute = ({children}) => {

    const {user, isLodeing } = useAuth()

    if(isLodeing){
        return <div> Loading..........</div>
    }

    if(!user){
        return <Navigate to='/login'></Navigate>
    }


    return children
};

export default PrivateRoute;