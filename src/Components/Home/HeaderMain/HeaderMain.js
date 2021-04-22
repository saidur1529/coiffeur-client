import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../Images/bg-barber.png';

const HeaderMain = () => {
    return (
        <section id="hero" class="hero d-flex align-items-center container">
          <div class="container">
            <div class="row">
              <div class="col-md-4 d-flex flex-column justify-content-center">
                <h1>HATE TO WAIT?</h1>
                <h2>BOOK A SLOT & END THE ERA O WAITING.</h2>
                <div>
                  <div class="text-center text-lg-start">
                      <Link to="/appointment">
                      <button class="btn btn-brand" href="#">BOOK A SLOT</button>
                      </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-md-offset-1 hero-img">
                <img src={chair} class="img-fluid" alt=""/>
              </div>
            </div>
          </div>
        </section>
    );
};

export default HeaderMain;