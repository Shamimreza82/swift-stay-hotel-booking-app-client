import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';
import moment from 'moment';
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    const [rating, setrating] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/ratings")
        .then((res) => {
          setrating(res.data);
        });
      }, []);
      
      console.log(rating);

  
    
    return (
        <div className=' md:mt-20 mt-6'>
          <p className='text-center md:text-4xl text-lg font-bold text-zinc-800'>Testimonials</p>
        <Swiper
        slidesPerView={2}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination,]}
        className="max-w-7xl py-10"
      >
        <div className=''>
            <div>
            <SwiperSlide >
          <div className='text-base  bg-slate-100 rounded-md mt-12 mb-10 p-6 py-16 w-[80%]'>
          {
            rating.slice(0,1).map(ratin => 
              <div key={ratin._id} className="flex justify-center items-center">
            <div>
            <div className=''>
              <div className='w-20 flex justify-center md:ml-60'>
             
              </div>
              <div>
                    <p className="font-bold text-zinc-800">{ratin.name}</p>
                    <div className="rating rating-sm">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400"  />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked/>
                  </div>
                  <p className="text-sm w-full text-gray-500">{ratin.CurrentDate}</p>
              </div>
            </div>
              <p className="text-sm mt-4">{ratin.text}</p>
            </div>
          </div>
              
              )
          }
          </div>
          </SwiperSlide>
            </div>
            <div>
            <SwiperSlide >
          <div className='text-base  bg-slate-100 rounded-md mt-12 mb-10 p-6 py-16 w-[80%]'>
          {
            rating.slice(1,2).map(ratin => 
              <div key={ratin._id} className="flex justify-center items-center">
            <div>
            <div className=''>
              <div className='w-20 flex justify-center md:ml-60'>
             
              </div>
              <div>
                    <p className="font-bold text-zinc-800">{ratin.name}</p>
                    <div className="rating rating-sm">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400"  />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked/>
                  </div>
                  <p className="text-sm w-full text-gray-500">{ratin.CurrentDate}</p>
              </div>
            </div>
              <p className="text-sm mt-4">{ratin.text}</p>
            </div>
          </div>
              
              )
          }
          </div>
          </SwiperSlide>
            </div>
            <div>
            <SwiperSlide >
          <div className='text-base  bg-slate-100 rounded-md mt-12 mb-10 p-6 py-16 w-[80%]'>
          {
            rating.slice(2,3).map(ratin => 
              <div key={ratin._id} className="flex justify-center items-center">
            <div>
            <div className=''>
              <div className='w-20 flex justify-center md:ml-60'>
             
              </div>
              <div>
                    <p className="font-bold text-zinc-800">{ratin.name}</p>
                    <div className="rating rating-sm">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400"  />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked/>
                  </div>
                  <p className="text-sm w-full text-gray-500">{ratin.CurrentDate}</p>
              </div>
            </div>
              <p className="text-sm mt-4">{ratin.text}</p>
            </div>
          </div>
              
              )
          }
          </div>
          </SwiperSlide>
            </div>
        </div>
      </Swiper>
        </div>
    );
};

export default Testimonials;