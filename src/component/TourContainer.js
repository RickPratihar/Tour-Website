import React from "react";
import "./TourContainer.css";

import cardImage1 from "../assets/20.jpg";
import cardImage2 from "../assets/14.jpg";
import cardImage3 from "../assets/3.jpg";
import cardImage4 from "../assets/4.jpg";
const TourContainer = () => {
  return (
    <div className="cards">
      <div className="heading">
        <h2>Explore India</h2>
        <p>These popular destinations have a lot to offer</p>
      </div>
      <div className="singleCard">
        <div className="imgDiv">
          <img src={cardImage1} alt="img" />
        </div>
        <div className="textDiv">
          <h4>Mumbai City</h4>
          <p>1,486 Properties</p>
        </div>
        <div />

        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage2} alt="img" />
          </div>
          <div className="textDiv">
            <h4>New Delhi</h4>
            <p>2,926 Properties</p>
          </div>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage3} alt="img" />
          </div>
          <div className="textDiv">
            <h4>Paris City</h4>
            <p>6,100 Properties</p>
          </div>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage4} alt="img" />
          </div>
          <div className="textDiv">
            <h4>Jaipur</h4>
            <p>7,800 Properties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourContainer;
