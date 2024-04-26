import React, {useRef} from "react";
import './navbar.css';

const Navbar = () => {
    const ref = useRef(null);
    
    const HandleClick = () => {
        ref.current?.scrollintoView({behaviour:'smooth'});
    };

    return (
      <nav className="navbar" ref={ref}>
          <div className="menu">
              <ul>
                  <li><a href="#Header">Home</a></li>
                  <li><a href="#AboutUs">About Us</a></li>
                  <li><a href="#Menu">Menu</a></li>
                  <li><a href="#ContactUs">Contact Us</a></li>
              </ul>
            </div>
            <div className="logo"><a href="#">The Grill Studio</a></div>
            <div className="login-btns">
                <a href="#SignUp">Sign up</a>
                <div className="last-child">
                  <a href="#Login">Login</a>
                </div>
             </div>
        </nav>
    )
};

export default Navbar;