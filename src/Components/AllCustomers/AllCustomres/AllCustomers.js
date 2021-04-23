import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllCustomers = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://fast-cliffs-27204.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pe-5" style={{ position: "absolute", right: -12, backgroundColor: "#78909c" }}>
                <h5 className="text-white">All Customers</h5>
                <AppointmentDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllCustomers;