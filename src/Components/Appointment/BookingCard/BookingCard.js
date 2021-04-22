import React from 'react';
import BookingForm from '../BookingForm/BookingForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5 text-center">
            <div className="card p-3">
                <h5 className="card-title text-brand">{booking.subject}</h5>
                <h6>{booking.slot}</h6>
                <p>Only {booking.totalSpaces} seats are available</p>
                <div>
                <button onClick={openModal} className="btn btn-brand text-uppercase">Book Now</button>
                <BookingForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date}></BookingForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;