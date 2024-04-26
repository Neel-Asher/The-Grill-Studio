import React from "react";
import './header.css';

const Header = () => {
    return (
      <div className='header' id="Header">
        <div className='header-content-left'>
          <h4 className='comfortaa'>Lorem ipsum dollor amet!</h4>
          <p>_____________________________________________</p>
          <h1 className='header-heading'>Welcome to The Grill Studio</h1><br/>
          <p className='comfortaa'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, nisi deserunt. Ut autem perferendis optio nam iste consectetur, incidunt quis!</p><br/>
          <br/><a href="#Login" className='book-a-table'>Book a table</a>
        </div>
        <div className='hover-container'>
          <div className='header-content-right'>  
            <img src='/images/Header_images/header-image.jpg' className='header-image'></img>
          </div>
          <div className='sq sq-1'></div>
          <div className='sq sq-2'></div>
        </div>
      </div>
    )
};

export default Header;