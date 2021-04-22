import React from 'react';
import img1 from '../../../Images/barber-thmb.jpg'
import img2 from '../../../Images/barber.jpg'
import img3 from '../../../Images/barber-thmb-2.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Barber = () => {
    return (
        <div className="d-flex justify-content-center text-center mt-5">
            <div className="col-md-4" >
            <img style={{width: '300px'}} className="img-fluid mb-3" src={img1} alt=""/>
            <h4>Ambroise Paré</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
            </div>
            <div className="col-md-4" >
            <img style={{width: '300px'}} className="img-fluid mb-3" src={img2} alt=""/>
            <h4>A.B. Moler</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
            </div>
            <div className="col-md-4" >
            <img style={{width: '300px', height: '400px'}} className="img-fluid mb-3" src={img3} alt=""/>
            <h4>Mathew Andis</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
            </div>
            </div>

        
    );
};

export default Barber;