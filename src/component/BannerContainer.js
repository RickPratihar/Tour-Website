import React from "react";

import "./BannerContainer.css";
import img1 from "../assets/16.jpg";
import img2 from "../assets/23.jpg";
import img3 from "../assets/22.jpg";




const BannerContainer = () => {
  return (
    <div className="banner">
      <div className="imgContainer">
        <div className="contryName">
          <h2>Karnataka</h2>
          <img src={img3} alt="indianFlag" />
        </div>
        <img src={img1} alt="bannerImg" />
      </div>
      <div className="imgContainer">
        <div className="contryName">
          <h2>Uttar Pradesh</h2>
          <img src={img3} alt="indianFlag" />
        </div>
        <img src={img2} alt="bannerImg" />
      </div>
    </div>

  );
};

export default BannerContainer;
