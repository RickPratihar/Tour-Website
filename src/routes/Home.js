import React from 'react'
import Navbar from "../component/Navbar"
import Hero from '../component/Hero'
import videoBg from "../assets/video.mp4"
import TourContainer from '../component/TourContainer'
import PopularDestination from '../component/PopularDestination'
import BannerContainer from '../component/BannerContainer'
import BannerContainer2 from '../component/BannerContainer2'
import NewsLetter from '../component/NewsLetter'
import Footer from '../component/Footer'
// import HomeCard from '../component/HomeCard'
const Home = () => {
  return (
    <>
     <Hero cName="hero" 
     heroVideo={videoBg}
     title= "FIND YOUR NEXT STAY"
     text="Search low prices on hotels, homes and much more..."
     buttonText="Plane Your Travle"
     url="/"
     btnClass="show"
     />
     <Navbar/>
     <TourContainer/>
     <PopularDestination/>
     <BannerContainer/>
     <BannerContainer2/>
     <NewsLetter/>
     <Footer/>
    </>
  )
}

export default Home