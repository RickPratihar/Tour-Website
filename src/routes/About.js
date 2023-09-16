import React from 'react'
import Navbar from '../component/Navbar'
// import Hero from '../component/Hero'
import HeroBanner from '../component/HeroBanner'
import AboutImg from "../assets/night.jpg"
import Footer from "../component/Footer"
import AboutUs from "../component/About Page/AboutUs"

const About = () => {
  return (
   <>
    <Navbar/>
    <HeroBanner cName="hero-mid" 
     heroImg={AboutImg}
     title= "About"
     />
    <AboutUs/>
     <Footer/>
   </>
  )
}

export default About