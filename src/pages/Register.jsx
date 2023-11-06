import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import Navber from "../components/Navber";
import Footer from "./HomePage/Footer";
import logo from '../assets/images/Untitled-1.png'
import amimation from '../assets/images/Animation - 1699310360279.json'
import Lottie from "lottie-react";




const Register = () => {
    const {createUser} = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleRegister = async e => {
        e.preventDefault()

        try {
            await createUser (email, password)
                .then(result => {
                    console.log(result.user);
                    navigate('/')
                })
                .catch(err => {
                    console.error(err);
                })
        } catch (error) {
              console.log(error);  
        }
        

    }


  return (
    <div>
        <Navber></Navber>
        <div className="container m-auto py-20">
        <div className="hero ">
          <div className=" flex flex-col-reverse md:flex-row-reverse gap-28  items-center">
            <div className="text-center lg:text-left  md:w-[50%] ">
              <Lottie className="md:w-[400px] w-[300px]" animationData={amimation}></Lottie>
            </div>
            <div className="bg-base-100 md:w-[80%]">
              <form onSubmit={handleRegister} className="card-body border rounded-md w-[400px]  ">
                <div className="flex justify-center items-center">
                   <img className="w-48 " src={logo}alt="" />
                </div>
               
                <p className="text-center text-2xl font-bold text-zinc-700">Register</p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    onBlur={(e)=> setName(e.target.value)}
                
                  />
                </div>
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
                  <input type="submit" className="btn bg-green-600 hover:bg-slate-600 text-white" value='Register'></input>
                </div>
                <div className="flex justify-center">
                <Link to='/login' className="text-center mt-6 "> Do you have an account? <span className="text-red-600 font-bold">Login</span></Link>
              </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
