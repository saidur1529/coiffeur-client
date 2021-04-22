import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
const BookingForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        fetch('https://fast-cliffs-27204.herokuapp.com/addBookings',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                console.log(success)
                closeModal();
                alert('Appointment created successfully');
            }
        })
        
    };
    return (
        <div>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 className="text-center text-brand">{appointmentOn}</h2>
            <p className="text-secondary text-center"><small>O {date.toDateString()}</small></p>
             <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>
                <div className="form-group">
                    <input type="text" {...register("phone", { required: true })} placeholder="Phone Number" className="form-control" />
                    {errors.phone && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="text" {...register("email", { required: true })} placeholder="Email" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group text-right">
                    <button type="submit" className="btn btn-brand">Send</button>
                </div>
            </form> 
        </Modal>
    </div>
    );
};

export default BookingForm;