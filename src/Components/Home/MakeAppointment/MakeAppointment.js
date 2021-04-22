import React from 'react';
import './MakeAppointment.css';
import barber from '../../../Images/barber.jpg';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                <div className="col-md-7 text-white pt-5">
                        <h1 className="mt-4 text-secondary">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-info">BOOK A SLOT</button>
                    </div>
                    <div className="col-md-5 d-md-block">
                        <img style={{height:'500px'}} src={barber} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;