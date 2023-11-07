import Banner from '../components/Banner';
import SpecialOffers from './HomePage/SpecialOffers';
import Testimonials from './HomePage/Testmonial/Testimonials';
import Newsletter from './HomePage/Newsletter';
import Footer from './HomePage/Footer';
import AvalableRooms from './HomePage/AvalableRooms';



const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <SpecialOffers></SpecialOffers>
                <AvalableRooms></AvalableRooms>
                <Newsletter></Newsletter>
                <Testimonials></Testimonials>
                <Footer></Footer>
               
        </div>
    );
};

export default Home;