import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <div className="footer" id="Footer">
            <div className="footer-left">
                <div className="left-header"><h2>Find Us</h2></div>
                <div className="left-text">
                    <p>123, Mall Road,</p>
                    <p>Mumbai - 064.</p>
                </div>
            </div>
            <div className="footer-center">
                <div><h1 className="footer-header">The Grill Studio</h1></div>
                <div className="center-text"><p>Lorem ipsum dolor sit amet!</p></div>
            </div>
            <div className="footer-right">
                <div className="right-header"><h2>Working Hours</h2></div>
                <div className="right-text">
                    <p>Monday-Friday: 08:00 Am - 12:00 Am</p>
                    <p>Saturday-Sunday: 07:00 Am - 11:00 Pm</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;