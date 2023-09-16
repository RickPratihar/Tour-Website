import React from "react";
import "./HeroStyles.css";


const Hero = (props) => {
  return (
    <div className={props.cName}>
      <video src={props.heroVideo} autoPlay loop muted />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
      <section className="home">
        <div className="sectionContainer container">
          <div className="homeCard grid">
            <div className="locationDiv">
              <label htmlFor="location">Select Your location</label>
              <input type="text" placeholder="Where Are You Going" ></input>
            </div>
            <div className="distDiv">
              <label htmlFor="distance">Select Your Date</label>
              <input type="date" placeholder="11/06/2024"></input>
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Select Your Price Range</label>
              <input type="price" placeholder="$140-$500"></input>
            </div>
            <button id="btn-2">Search</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
