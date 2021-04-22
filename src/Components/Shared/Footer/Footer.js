import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-area clear-both">
                        <div style={{height:'250px'}} className="mt-5 text-center">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
        </footer>
        
    );
};

export default Footer;