import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";
import PrivateRoute from "../pages/PrivateRoute";
import RoomDetailes from "../pages/Rooms/RoomDetailes";
import Reviews from "../pages/Reviews/Reviews";
import BookingDetiles from "../pages/Rooms/BookingDetiles";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout></MainLayout>, 
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/', 
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/api/v1/rooms')
                
            }, 
            {
                path: '/bookingDetiles/:id', 
                element: <PrivateRoute>
                    <BookingDetiles></BookingDetiles>,
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/api/v1/room/${params.id}`)
            }
            
        ]
    }, 
    {
        path: '/login', 
        element: <Login></Login>
    }, 
    {
        path: '/register', 
        element: <Register></Register>
    }, 
    {
        path: '/rooms', 
        element: <Rooms></Rooms>
    }, 
    {
        path: '/myBookings', 
        element: <PrivateRoute>
                    <MyBookings></MyBookings> 
                </PrivateRoute>
    },
    {
        path: '/roomsDeities/:id', 
        element: 
            <RoomDetailes></RoomDetailes>,
        loader: ({params}) => fetch(`http://localhost:5000/api/v1/room/${params.id}`)
        
    }, 
    {
        path: '/reviews', 
        element: <Reviews></Reviews>
            
    }
])

export default router; 