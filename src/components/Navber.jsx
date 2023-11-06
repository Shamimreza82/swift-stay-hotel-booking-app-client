
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import logo from '../assets/images/Untitled-1.png'

const Navber = () => {
    const navigate = useNavigate()

    const {user, logeOut} = useAuth()

    const handleLogout = () => {
        logeOut()
        .then(() => {
            navigate('/login')
        } )
    }

  return (
    <div className="w-full shadow-md bg-zinc-800 py-1">
      <div className="drawer max-w-7xl m-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none "
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            {/* <p className="flex-1 px-2 mx-2 text-2xl font-black text-green-500 drop-shadow-xl">SwiftStay</p> */}
           <div className="flex-1 justify-between">
               <img className='w-40' src={logo} alt="" />
           </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal flex justify-center gap-6">
                {/* Navbar menu content here */}
               
                    <NavLink 
                    to="/"
                    className={({ isActive, isPending, isTransitioning })  =>
                    [
                        isPending ? "text-white" : " text-yellow-50 ",
                        isActive ? "   border-b-2 border-green-500" : "hover:scale-110 duration-300",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                    Home
                </NavLink>
          
             
                    <NavLink
                    to="/rooms"
                    className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "" : "text-yellow-50 ",
                        isActive ? "   border-b-2 border-green-500" : "hover:scale-110 duration-300",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                    Rooms
                </NavLink>
               
           
                    <NavLink
                    to="/myBookings"
                    className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "text-yellow-50 ",
                        isActive ? "   border-b-2 border-green-500" : "hover:scale-110 duration-300",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                   My Bookings
                </NavLink>
               
                    <NavLink
                    to="/about"
                    className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "text-yellow-50 ",
                        isActive ? "   border-b-2 border-green-500" : "hover:scale-110 duration-300",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                   About Us
                </NavLink>
             
               
                    <NavLink
                    to="/contact"
                    className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "text-yellow-50 ",
                        isActive ? "   border-b-2 border-green-500" : "hover:scale-110 duration-300",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                   Contact Us
                </NavLink>
              
                {
                    user ? 
                    <NavLink
                    onClick={handleLogout}
                    to="/messages"
                    className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "text-yellow-50 ",
                        isActive ? "   border-b-2 border-green-500" : "hover:scale-110 duration-300",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                   Logout
                </NavLink>
                :
                
                <NavLink
                to="/login"
                className={({ isActive, isPending, isTransitioning }) =>
                [
                    isPending ? "hover:scale-110" : "text-yellow-50 ",
                    isActive ? "   border-b-2 border-green-500" : "hover:scale-110 duration-300",
                    isTransitioning ? "transitioning" : "",
                ].join(" ")
                }
            >
               Login
            </NavLink>
            
                }
                
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-screen bg-base-200 z-50 space-y-3">
            {/* Sidebar content here ------------------------------ */}
                <img className="w-40" src={logo} alt="" />
                   <NavLink 
                    to="/"
                    className={({ isActive, isPending, isTransitioning })  =>
                    [
                        isPending ? "" : "border pl-2 py-1 ",
                        isActive ? "   border pl-2 py-1 border-green-500" : "hover:scale-110 duration-300",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/rooms"
                    className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "" : " border pl-2 py-1",
                      isActive ? "   border pl-2 py-1 border-green-500" : "hover:scale-110 duration-300",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                    Rooms
                </NavLink>
               
           
                    <NavLink
                    to="/myBookings"
                    className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "" : " border pl-2 py-1",
                      isActive ? "   border pl-2 py-1 border-green-500" : "hover:scale-110 duration-300",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                   My Bookings
                </NavLink>
               
                    <NavLink
                    to="/about"
                    className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "" : " border pl-2 py-1",
                      isActive ? "   border pl-2 py-1 border-green-500" : "hover:scale-110 duration-300",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                   About Us
                </NavLink>
             
               
                    <NavLink
                    to="/contact"
                    className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? " " : "  border pl-2 py-1",
                      isActive ? "   border pl-2 py-1 border-green-500" : "hover:scale-110 duration-300",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                   Contact Us
                </NavLink>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
