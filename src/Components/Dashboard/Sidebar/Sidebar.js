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
                    <Link to="/allBookings" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>All bookings</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/allCustomers" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Customers</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bills" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Bills</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white" >
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