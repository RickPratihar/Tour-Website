import React from 'react'
import "./HeroStyles.css";
const HeroBanner = (props) => {
  return (
    <div className={props.cName}>
    <img  alt='about-img' src={props.heroImg} />
    <div className="hero-text">
      <h1>{props.title}</h1>
      {/* <p>{props.text}</p>
      <a href={props.url} className={props.btnClass}>
        {props.buttonText}
      </a> */}
    </div>
  </div>
  )
}

export default HeroBanner