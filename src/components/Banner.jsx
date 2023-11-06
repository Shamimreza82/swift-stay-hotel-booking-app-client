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
              <p className="text-center md:text-white md:text-5xl absolute inset-1/3 ">Your Swift Solution to Effortless Hotel <span className='text-3xl'>Bookings and Unforgettable Stays</span>
              </p>

          </div>
          
          </div>
    </div>
  );
};

export default Banner;
