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
import UpdateBooking from "../pages/MyBookings/UpdateBooking";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout></MainLayout>, 
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/', 
                element: <Home></Home>,
                loader: ()=> fetch('https://hotel-management-server-three.vercel.app/api/v1/rooms')
                
            }, 
            {
                path: '/bookingDetiles/:id', 
                element: <PrivateRoute>
                    <BookingDetiles></BookingDetiles>,
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://hotel-management-server-three.vercel.app/api/v1/room/${params.id}`)
            }, 
            {
                path: '/about', 
                element: <AboutUs></AboutUs>,
            }, 
            {
                path: '/contact', 
                element: <ContactUs></ContactUs>,
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
        loader: ({params}) => fetch(`https://hotel-management-server-three.vercel.app/api/v1/room/${params.id}`)
        
    }, 
    {
        path: '/reviews', 
        element: <Reviews></Reviews>
            
    }, 
    {
        path: '/updateBooking/:id', 
        element: <PrivateRoute>
            <UpdateBooking></UpdateBooking>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://hotel-management-server-three.vercel.app/booking/${params.id}`)
    }
])

export default router; 