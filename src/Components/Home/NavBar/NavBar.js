import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link ms-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5" to="/appointment">Salon Services</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="#">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5"  href="#">Blog</a>
                        </li>
                    </ul>
                    <div>
                        <Link to="/Dashboard/appointments"><button className=" ms-5 btn btn-brand">Dashboard</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;