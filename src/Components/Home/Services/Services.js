import React from 'react';
import haircut from '../../../Images/hair-cut.png';
import shaving from '../../../Images/shaver.png';
import mushtache from '../../../Images/mustache.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const servicesData = [
    {
        name: 'Haircut',
        img: haircut
    },
    {
        name: 'Shaving',
        img: shaving
    },
    {
        name: 'Beard & Moustache',
        img: mushtache
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
            <h5 style={{color: 'rgb(140, 109, 226)'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            </div>
            <div className="row d-flex justify-content-center">
            <div className="w-50 row mt-3 pt-3">
            {
                servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Services;