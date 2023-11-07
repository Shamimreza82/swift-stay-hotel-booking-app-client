
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import Navber from "../components/Navber";
import Footer from "./HomePage/Footer";
import Lottie from "lottie-react";
import amimation from '../assets/images/Animation - 1699309790212.json'
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";




const Login = () => {

    const {loginUser, googleLogin} = useAuth()

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);

    const [email, setEmail] = useState(0)
    const [password, setPassword] = useState(0)

    const handleLoginUser = async (e) => {
        e.preventDefault()
           
        try {
            await loginUser(email, password)
            .then(res => {
              console.log(res.user);
              navigate(location?.state ? location.state : "/");
            })
        } catch (error) {
            console.log(error);
        }
    }

const handlegoogle = () => {
  googleLogin()
  .then( resilt => {
    console.log(resilt);
    navigate(location?.state ? location.state : "/");
  })
 
}


  return (
    <div className="bg-slate-50">
      <Helmet> <title>SwiftStay | Login</title></Helmet>
        <Navber></Navber>
      <div className="container m-auto py-5 md:py-28">
        <div className="hero">
          <div className=" flex flex-col-reverse md:flex-row-reverse  items-center md:gap-40">
            <div className="text-center lg:text-left  md:w-[50%] ">
              <Lottie animationData={amimation} loop={true}></Lottie>
            </div>
            <div className="bg-base-100 border rounded-md md:w-[60%]">
              <form onSubmit={handleLoginUser} className="card-body ">
                <p className="text-center text-3xl font-bold text-green-500">Please Login</p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    onBlur={(e)=> setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    onBlur={(e)=> setPassword(e.target.value)}
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn bg-green-500 hover:bg-slate-600 text-white" value='Login'></input>
                </div>
              </form>
              <div className="flex justify-center ">
                  <button onClick={handlegoogle} className="flex gap-5 mb-3 -mt-3 bg-slate-100 hover:bg-slate-200 duration-200 py-2 px-4 rounded-full items-center ">
                    <FcGoogle className="text-3xl "></FcGoogle>
                    Login with google</button>
                </div>
              <div className="flex justify-center">
                <Link to='/register' className="text-center pb-4 text-sm"> Do you have an account? <span className="text-red-600 font-bold">Register</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
