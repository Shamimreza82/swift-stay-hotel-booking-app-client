
import { Link } from "react-router-dom";

import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import Navber from "../components/Navber";


const Login = () => {

    const {loginUser} = useAuth()


    const [email, setEmail] = useState(0)
    const [password, setPassword] = useState(0)

    const handleLoginUser = async (e) => {
        e.preventDefault()
           
        try {
            await loginUser(email, password)
            .then(res => {
              console.log(res.user);
            })
            
            
           
        } catch (error) {
            console.log(error);
        }

    }


  return (
    <div>
        <Navber></Navber>
      <div className="container m-auto py-12">
        <div className="hero">
          <div className=" flex flex-col-reverse md:flex-row-reverse  items-center">
            <div className="text-center lg:text-left bg-slate-400 md:w-[50%] ">
              <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="bg-base-100 md:w-[40%]">
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
              <div className="flex justify-center">
                <Link to='/register' className="text-center pb-4"> Do you have an account? <span className="text-red-600 font-bold">Register</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
