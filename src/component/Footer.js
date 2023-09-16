import React from "react";
import "./Footer.css";
import img1 from "../assets/app.jpg";
import img2 from "../assets/pay.png";
import img3 from "../assets/play.jpg";

const Footer = () => {
  return (
    <div className="section-p1">
      <div className="col">
        <h2 className="logo">Travl<span>ger</span></h2>
        <h4>contact</h4>
        <p>
          <strong>Adress:</strong> Ramsagar, west Bengal, Bankura
        </p>
        <p>
          <strong>Phone No:</strong> (+91) 01236748367
        </p>
        <p>
          <strong>Hours:</strong> 10.00-18.00 Mon-Sat
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="/">About Us</a>
        {/* <a href="/">Delivery Information</a> */}
        <a href="/">privacy Policy</a>
        <a href="/">Terms & Conditions</a>
        <a href="/">Contact Us</a>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <a href="/">Sing in</a>
        <a href="/">View Cart</a>
        <a href="/">My Wishlist</a>
        {/* <a href="/">Track My Order</a> */}
        <a href="/">Help</a>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src={img1} alt="" />
          <img src={img3} alt="" />
        </div>
        <p>Secured Payment Geteways</p>
        <img src={img2} alt="" />
      </div>

      <div className="copyright">
        <p>Created By Rick Pratihar © 2024 All rights reserved.</p>
      </div>
    </div>
  );
};




export default Footer;
