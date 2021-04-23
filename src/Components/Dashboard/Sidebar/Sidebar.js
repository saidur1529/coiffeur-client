import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/appointments" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/allCustomers" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Customers</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/bills" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Bills</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addService" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Add Service</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;