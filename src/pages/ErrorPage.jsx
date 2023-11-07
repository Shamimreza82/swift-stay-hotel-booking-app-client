import Lottie from "lottie-react";
import animation from '../assets/images/Animation - 1699348519263.json'
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className="px-4 py-32 mx-auto max-w-7xl flex justify-center h-screen ">
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