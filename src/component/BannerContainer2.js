import React from 'react'
import "./BannerContainer2.css"

import img1 from "../assets/24.jpg"
import img2 from "../assets/25.jpg"
import img3 from "../assets/22.jpg"
import img4 from "../assets/19.jpg"

const BannerContainer2 = () => {
  return (
    <div className='banner2'>
        <div className="imgContainer2">
        <div className="contryName2">
          <h2>Kolkata</h2>
          <img src={img3} alt="indianFlag" />
        </div>
        <img src={img1} alt="bannerImg" />
      </div>
      <div className="imgContainer2">
        <div className="contryName2">
          <h2>Madurai</h2>
          <img src={img3} alt="indianFlag" />
        </div>
        <img src={img2} alt="bannerImg" />
      </div>
      <div className="imgContainer2">
        <div className="contryName2">
          <h2>Varanasi</h2>
          <img src={img3} alt="indianFlag" />
        </div>
        <img src={img4} alt="bannerImg" />
      </div>
   
    </div>
  )
}

export default BannerContainer2