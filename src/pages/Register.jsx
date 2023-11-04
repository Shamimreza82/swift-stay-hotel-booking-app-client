import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";



const Register = () => {
    const {createUser} = useAuth()
    const [email, setEmail] = useState(0)
    const [password, setPassword] = useState(0)

    const handleRegister = async e => {
        e.preventDefault()

        try {
            await createUser (email, password)
                .then(result => {
                    console.log(result.user);
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
      <div className="container m-auto">
        <div >
          <div className=" flex flex-col lg:flex-row-reverse md: py-10">
            <div className="md:w-[40%]">
            <p className="text-center pt-5 text-3xl font-bold text-green-500">Account Register</p>
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    onBlur={(e) => setEmail(e.target.value)}
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
                    onBlur={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 ">
                  <input type="submit" className="btn bg-green-500 hover:bg-slate-600 text-white" value="Register"></input>
                </div>
              </form>
              <div className="text-center">
                  <Link to="/login" className="text-center pb-4">
                         Have an account? <span className=" text-red-600 font-bold">Login</span> 
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
