import React from 'react';
import Barber from '../Barber/Barber';
const Barbers = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center text-primary mb-5">Our Barbers</h5>
                <div className="row">
                <Barber/>
                <Barber/>
                <Barber/>
                </div> 
            </div>
        </section>
    );
};

export default Barbers;