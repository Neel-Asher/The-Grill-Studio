import React from "react";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import AboutUs from "./components/AboutUs/aboutus";
import Menu from "./components/Menu/menu";
import ContactUs from "./components/ContactUs/contactus";
import SignUp_Login from "./components/SignUp-Login/signup-login";
import Footer from "./components/Footer/footer";
import "./App.css";

const App = () => {
    
    return (
        <div className="App">
            <Navbar/>
            <Header/>
            <AboutUs/>
            <Menu/>
            <ContactUs/>
            <SignUp_Login/>
            <Footer/>
        </div>
    );
};

export default App;
