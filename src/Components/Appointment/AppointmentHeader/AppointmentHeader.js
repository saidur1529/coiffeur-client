import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../Images/bg-barber.png'
const AppointmentHeader = ({handleDateChange}) => {
    return (
        <section id="hero" class="hero d-flex align-items-center container">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 d-flex flex-column justify-content-center text-center">
                        <h1>Appointment</h1>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div class="col-md-8 col-md-offset-1 hero-img">
                        <img src={chair} class="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHeader;