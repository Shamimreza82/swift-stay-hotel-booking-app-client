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
        spaceBetween={30}
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
        <SwiperSlide >
          <div className='text-base  bg-slate-100 rounded-md mt-10 mb-10 p-6'>
          {
            rating.slice(2,3).map(ratin => 
              <div key={ratin._id} className="flex justify-center items-center">
            <div>
            <div className=''>
              <div className='w-20 flex justify-center md:ml-60'>
              <img className="rounded-full w-24 " src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMjFfM2RfcmVuZGVyX2NoYXJhY3Rlcl9vZl9hX3N0cmVzc2VkX2J1c2luZXNzX21hbl9kMDk1ZDQ3NC0zYmI0LTQ0MzItYTJhYS1lMDZhMTg2MjAzZDUucG5n.png" alt="" />
              </div>
              <div>
                    <p className="font-bold text-zinc-800">{ratin.name}</p>
                    <div className="rating rating-sm">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  </div>
                  <p className="text-sm w-full text-gray-500">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
              </div>
            </div>
              <p className="text-sm">{ratin.text}</p>
            </div>
          </div>
              
              )
          }
          </div>
          </SwiperSlide>
          <SwiperSlide >
          <div className='text-base  bg-slate-100 rounded-md mt-10 mb-10 p-6'>
          {
            rating.slice(2,3).map(ratin => 
              <div key={ratin._id} className="flex justify-center items-center">
            <div>
            <div className=''>
              <div className='w-20 flex justify-center md:ml-60'>
              <img className="rounded-full w-24 " src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMjFfM2RfcmVuZGVyX2NoYXJhY3Rlcl9vZl9hX3N0cmVzc2VkX2J1c2luZXNzX21hbl9kMDk1ZDQ3NC0zYmI0LTQ0MzItYTJhYS1lMDZhMTg2MjAzZDUucG5n.png" alt="" />
              </div>
              <div>
                    <p className="font-bold text-zinc-800">{ratin.name}</p>
                    <div className="rating rating-sm">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  </div>
                  <p className="text-sm w-full text-gray-500">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
              </div>
            </div>
              <p className="text-sm">{ratin.text}</p>
            </div>
          </div>
              
              )
          }
          </div>
          </SwiperSlide>
          <SwiperSlide >
          <div className='text-base  bg-slate-100 rounded-md mt-10 mb-10 p-6'>
          {
            rating.slice(2,3).map(ratin => 
              <div key={ratin._id} className="flex justify-center items-center">
            <div>
            <div className=''>
              <div className='w-20 flex justify-center md:ml-60'>
              <img className="rounded-full w-24 " src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMjFfM2RfcmVuZGVyX2NoYXJhY3Rlcl9vZl9hX3N0cmVzc2VkX2J1c2luZXNzX21hbl9kMDk1ZDQ3NC0zYmI0LTQ0MzItYTJhYS1lMDZhMTg2MjAzZDUucG5n.png" alt="" />
              </div>
              <div>
                    <p className="font-bold text-zinc-800">{ratin.name}</p>
                    <div className="rating rating-sm">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  </div>
                  <p className="text-sm w-full text-gray-500">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
              </div>
            </div>
              <p className="text-sm">{ratin.text}</p>
            </div>
          </div>
              
              )
          }
          </div>
          </SwiperSlide>
          <SwiperSlide >
          <div className='text-base  bg-slate-100 rounded-md mt-10 mb-10 p-6'>
          {
            rating.slice(2,3).map(ratin => 
              <div key={ratin._id} className="flex justify-center items-center">
            <div>
            <div className=''>
              <div className='w-20 flex justify-center md:ml-60'>
              <img className="rounded-full w-24 " src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMjFfM2RfcmVuZGVyX2NoYXJhY3Rlcl9vZl9hX3N0cmVzc2VkX2J1c2luZXNzX21hbl9kMDk1ZDQ3NC0zYmI0LTQ0MzItYTJhYS1lMDZhMTg2MjAzZDUucG5n.png" alt="" />
              </div>
              <div>
                    <p className="font-bold text-zinc-800">{ratin.name}</p>
                    <div className="rating rating-sm">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  </div>
                  <p className="text-sm w-full text-gray-500">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
              </div>
            </div>
              <p className="text-sm">{ratin.text}</p>
            </div>
          </div>
              
              )
          }
          </div>
          </SwiperSlide>
      
      </Swiper>
        </div>
    );
};

export default Testimonials;