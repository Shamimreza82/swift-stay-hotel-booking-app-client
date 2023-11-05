import React from 'react'
import img from '../../assets/images/1289.jpg'
import useRooms from '../../Hooks/useRooms';
import Marquee from "react-fast-marquee";

const SpecialOffers = () => {

    const {data, isLoading} = useRooms()

    return (
        <div className='bg-zinc-200 my-8 md:py-20'>
            <div className='flex max-w-7xl m-auto'>
                <div className='flex justify-center'>
                    <p className='text-4xl pb-6'>Our Spacial Offer</p>
                </div>
            </div>
            
            <div >
            <Marquee>
            <div className='flex  gap-6'>
                    {
                        data?.map(images => 

                        <div key={images._id}>
                            <div className='relative '>
                                <img className='md:h-[300px] h-40' src={images.roomImages} alt="" />
                                 <p className='absolute bottom-0 text-red-600  '>Spachal </p>
                            </div>
                            <p></p>
                        </div>)
                    }
            </div>
            </Marquee>
            </div>
            
        </div>
    );
};

export default SpecialOffers;