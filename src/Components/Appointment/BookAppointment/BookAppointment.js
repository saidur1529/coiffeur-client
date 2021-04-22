import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({date}) => {
    const bookingData = [
        {
            id: '1',
            subject: 'Full Hair Cut',
            slot: '9:00 AM - 11:00 AM',
            totalSpaces:'5'
        },
        {
            id: '2',
            subject: 'Shave',
            slot: '12:00 PM - 01:00 PM',
            totalSpaces:'10'
        },
        {
            id: '3',
            subject: 'Hair Cut',
            slot: '12:00 PM - 02:00 PM',
            totalSpaces:'5'
        },
        {
            id: '4',
            subject: 'Hair Treatment',
            slot: '9:00 AM - 12:00 PM',
            totalSpaces:'2'
        },
        {
            id: '5',
            subject: 'Beard and Mustache',
            slot: '2:00 PM - 04:00 PM',
            totalSpaces:'6'
        },
        {
            id: '6',
            subject: 'Shave',
            slot: '03:00 PM - 04:00 PM',
            totalSpaces:'4'
        }
        
    ];
    return (
        <section className="container mt-5">
            <h2 className="text-center text-brand">Available Appointments on {date.toDateString()}</h2>
            <div className="row mt-5">
            {
                bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
            }
            </div>
        </section>
    );
};

export default BookAppointment;