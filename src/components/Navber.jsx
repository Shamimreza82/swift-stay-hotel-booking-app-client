
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navber = () => {
    const navigate = useNavigate()

    const {user, logeOut} = useAuth()

    const handleLogout = () => {
        logeOut()
        .then(() => {
            navigate('/')
        } )
    }

  return (
    <div className="bg-slate-200">
      <div className="drawer max-w-7xl m-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
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
            <div className="flex-1 px-2 mx-2">SwiftStay</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                    <NavLink
                    to="/rooms"
                    className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                    Rooms
                </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/myBookings"
                    className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                   My Bookings
                </NavLink>
                </li>
                {
                    user ? <li>
                    <NavLink
                    onClick={handleLogout}
                    to="/messages"
                    className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                    }
                >
                   Logout
                </NavLink>
                </li> :
                <li>
                <NavLink
                to="/login"
                className={({ isActive, isPending, isTransitioning }) =>
                [
                    isPending ? "pending" : "",
                    isActive ? "active" : "",
                    isTransitioning ? "transitioning" : "",
                ].join(" ")
                }
            >
               Login
            </NavLink>
            </li>
                }
                
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here ------------------------------ */}
            <li>
              <NavLink
                to="/messages"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                Messages
              </NavLink>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
