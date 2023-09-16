import React from 'react'
import Navbar from '../component/Navbar'
import HeroBanner from '../component/HeroBanner'
import AboutImg from "../assets/night.jpg"
import Footer from "../component/Footer"
import Servicepage from '../component/Services/ServicePage'


const Service = () => {
  return (
   <>
     <Navbar/>
    <HeroBanner cName="hero-mid" 
     heroImg={AboutImg}
     title= "Service"
     />
     <Servicepage/>
 
     <Footer/>
   </>
  )
}

export default Service