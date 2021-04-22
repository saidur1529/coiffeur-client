import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Barber from '../Barber/Barber';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Barber></Barber>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;