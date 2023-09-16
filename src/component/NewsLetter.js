import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <div id="newsletter">
      <div className="newstext">
        <h4>sign up for newsletter</h4>
        <p>
          Get E-mail Update about our latest shop and
          <span>special offers</span>
        </p>
      </div>

      <div className="form">
        <input type="text" placeholder="Enter Your Email Adress" />
        <button className="normal">sign Up</button>
      </div>
    </div>
  )
}

export default NewsLetter