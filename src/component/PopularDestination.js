import React from "react";
import "./PopularDestination.css"
import {Data} from "./Data.js"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";



// import img from "../assets/img.jpg";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
// import img5 from "../assets/img5.jpg";
// import img6 from "../assets/img6.jpg";
// import img7 from "../assets/img7.jpg";

import { Link } from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";

// import img8 from "../assets/img8.jpg";
// import img9 from "../assets/1.jpg";


const PopularDestination = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3>Most Visited destination</h3>
      </div>
      <div className="secContent grid">
        {Data.map((item, index) => {
            return (
              <div key={index} className="singleDestination">
                <div className="imageDiv">
                  <img src={item.imgSrc} alt={item.destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{item.destTitle} </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{item.location}</span>
                  </span>

                  <div className="fees flex">
                    {/* <div className="grade">
                      <span>
                        {item.grade}
                        <small>*1</small>
                      </span>
                    </div> */}
                    <div className="price">
                    <BsCurrencyRupee className="icon"/>
                      <h5>{item.fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    {/* <p>{item.description}</p> */}
                  </div>
                  <Link to={`/ProductView/${item.id}`}>
                  <button className="btnflex">DETAILS <HiOutlineClipboardCheck className='icon'/> </button>
                  </Link>

                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default PopularDestination;



