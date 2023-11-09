import Lottie from "lottie-react";
import animation from '../assets/images/Animation - 1699348519263.json'
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className=" flex justify-center items-center bg-slate-50 ">
          <div>
          <Lottie className="w-[100%]" animationData={animation}> </Lottie>
         <div className="flex justify-center">
         <Link to='/' className="btn bg-green-600 text-white ">back in home page</Link>
         </div>
          </div>
</section>

    );
};

export default ErrorPage;