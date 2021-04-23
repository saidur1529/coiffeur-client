import React from 'react';

const AppointmentDataTable = ({appointments}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-white text-left" scope="col">Sr#</th>
                <th className="text-white" scope="col">Name</th>
                <th className="text-white" scope="col">Service</th>
                <th className="text-white" scope="col">Date</th>
                <th className="text-white" scope="col">Phone</th>
                <th className="text-white" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.service}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentDataTable;