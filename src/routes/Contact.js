import React from 'react'
import Navbar from '../component/Navbar'
import HeroBanner from '../component/HeroBanner'
import AboutImg from "../assets/13.jpg"
import Footer from "../component/Footer"
import ContactUs from "../component/Contact/ContactUs"

const Contact = () => {
  return (
    <>
      <Navbar/>
    <HeroBanner cName="hero-mid" 
     heroImg={AboutImg}
     title= "Contact"
     />
     <ContactUs/>
     <Footer/>
    </>
  )
}

export default Contact