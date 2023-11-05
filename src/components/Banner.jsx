import Navber from './Navber';
import video from '../assets/video.mp4'




const Banner = () => {
  return (
    <div className="relative z-0 m-auto">
      <div className='md:absolute z-30 w-full'>
        <Navber></Navber>
      </div>
          <div className="">
          <div className="relative">
             <video src={video} className="w-full  brightness-50  " width="1080" height="500" autoPlay loop>
             </video>
              <p className="absolute md:text-white object-cover top-72  flex justify-center  md:text-5xl">Your Swift Solution to Effortless Hotel Bookings and Unforgettable Stays</p>
          </div>
          
          </div>
    </div>
  );
};

export default Banner;
