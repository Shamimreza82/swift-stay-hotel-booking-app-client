import Navber from './Navber';
import video from '../assets/video.mp4'




const Banner = () => {
  return (
    <div className="relative z-0 m-auto">
      <div className='md:absolute z-30 w-full'>
        <Navber></Navber>
      </div>
          <div className="">
          <div className="relative ">
              <video src={video} className="w-full  brightness-50  " width="1080" height="500" autoPlay loop>
             
              </video>
              <p className="text-center text-yellow-50 md:text-5xl font-bold absolute -m-20 mt-1 md:mt-24 inset-1/3 ">Effortless Hotel Bookings and Unforgettable Stays <br /> <span className='md:text-3xl'>Your Swift Solution to </span>
              </p>

          </div>
          
          </div>
    </div>
  );
};

export default Banner;
