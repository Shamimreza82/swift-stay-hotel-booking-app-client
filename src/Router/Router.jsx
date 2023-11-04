import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout></MainLayout>, 
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/', 
                element: <Home></Home>
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
        element: <MyBookings></MyBookings> 
    }
])

export default router; 