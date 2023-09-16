import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="Contact-from">
      <h1>Send a message to Us! </h1>
      <form>
        <input placeholder="Enter Name" type="text"/>
        <input placeholder="Enter Email" type="email" required/>
        <input placeholder="Enter Subject" type="text"/>
        <textarea placeholder="Lave a mesage..." rows={4}></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
