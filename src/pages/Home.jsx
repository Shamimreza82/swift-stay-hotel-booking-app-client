import Banner from '../components/Banner';
import SpecialOffers from './HomePage/SpecialOffers';
import Testimonials from './HomePage/Testimonials';
import Newsletter from './HomePage/Newsletter';
import Footer from './HomePage/Footer';
import AvalableRooms from './HomePage/AvalableRooms';
import Banner2 from '../components/Banner2';
import { CarouselCustomArrows } from '../components/CarouselCustomArrows';


const Home = () => {
    return (
        <div>

          <Banner></Banner>
            <div className=''>
                <SpecialOffers></SpecialOffers>
                <AvalableRooms></AvalableRooms>

                <Newsletter></Newsletter>
                <Testimonials></Testimonials>
                
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;