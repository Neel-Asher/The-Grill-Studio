import React from "react";
import './contactus.css';

const ContactUs = () => {
    return(
        <div id="ContactUs" className="contactus">
        <h1 id="heading">Contact Us</h1> <br/><br/>
        <div id="content">
            <img src="images\Contact_images\InstaLogo.jpeg" class="icon insta"/>
            <a href="https://www.instagram.com/" class="icontxt">   : @thegrillstudio</a> <br/><br/><br/>
            <img src="images\Contact_images/FacebookLogo.png" class="icon facebook"/>
            <a href="https://www.facebook.com/" class="icontxt">   : @the_grill_studio</a><br/><br/><br/>
            <img src="images\Contact_images/EmailLogo.png" class="icon email"/>
            <a href="https://www.gmail.com/" class="icontxt">   : thegrillstudio@gmail.com</a><br/><br/><br/>
            <img src="images\Contact_images/TelephoneLogo.png" class="icon telephone"/>
            <a class="icontxt">   : +91-01234 56789</a>
        </div>
    </div>
    )
};

export default ContactUs;