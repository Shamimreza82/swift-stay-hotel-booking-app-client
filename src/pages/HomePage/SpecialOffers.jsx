import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";

const SpecialOffers = () => {

    const rooms = useLoaderData()
    console.log(rooms);

    // if(isLoading){
    //     return <div className='flex justify-center items-center '>
    //         <span className="loading loading-spinner loading-md "></span>
    //     </div>
    // }

    return (
        <div className='bg-zinc-200 my-8 md:py-20'>
            <div className='flex max-w-7xl m-auto'>
                <div className='flex justify-center'>
                    <p className='text-4xl pb-6'>Our Spacial Offer</p>
                </div>
            </div>
            
            <div >
            <Marquee>
            <div className='flex gap-6'>
                    {
                        rooms?.map(images => 

                        <div key={images._id}>
                            <div className='relative '>
                                <img className='md:h-[300px] h-40' src={images.roomImages} alt="" />
                                 <p className='absolute bottom-0 text-red-600  '>Spacial </p>
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