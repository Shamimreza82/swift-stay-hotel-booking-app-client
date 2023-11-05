import Banner from '../components/Banner';
import SpecialOffers from './HomePage/SpecialOffers';
import Testimonials from './HomePage/Testimonials';
import Newsletter from './HomePage/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='bg-zinc-200'>
                <SpecialOffers></SpecialOffers>
                <Newsletter></Newsletter>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;