import Banner from '../components/Banner';
import SpecialOffers from './HomePage/SpecialOffers';
import Testimonials from './HomePage/Testimonials';
import Newsletter from './HomePage/Newsletter';
import Footer from './HomePage/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=''>
                <SpecialOffers></SpecialOffers>
                <Newsletter></Newsletter>
        
                <Testimonials></Testimonials>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;