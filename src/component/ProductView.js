import React from "react";
import { useParams } from "react-router-dom";

import { HiOutlineLocationMarker } from "react-icons/hi";
import {BsCurrencyRupee }from 'react-icons/bs'

import "./ProductView.css";
import Footer from '../component/Footer'

import Navbar from "../component/Navbar";
import { Data } from "./Data.js";
import Star from "./Star";




const ProductView = () => {
  let { ProductId } = useParams();

  const product = Data.find((p) => p.id == ProductId);

  return (
    <>
    <div className="SingleProduct">
      <Navbar />
     

      <div className="productImg">
        <img src={product.imgSrc} alt="img" />
      </div>

      <div className="details">
        <div className="product-p">
          <p>Home/Product details</p>
        </div>

        <div className="product-title">
          <h2>{product.destTitle}</h2>
        </div>

        <Star stars={product.stars}  review={product.review}/>

        <span className="location">
          <HiOutlineLocationMarker className="icon" />
          <span className="name">{product.location}</span>
        </span>

        <div className="product-fees">
          <BsCurrencyRupee className="icon"/>
          <h4>{product.fees}</h4>
        </div>

        <div className="product-des">
          <p>{product.description}</p>
        </div>

        {/* <div className="mamber">
          <select>
            <option>Select Member</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div> */}

        <div className="btn">
          <button>Book Now</button>
        </div>

        <div className="description">
          <div className="description-title">
          <strong>{product.Weather}</strong>
          <p>{product.weather1}</p>
          </div>
          
          <div className="description-title">
          <strong>{product.Label}</strong>
          <p>{product.Label1}</p>
          </div>
 
          <div className="description-title">
          <strong>{product.Tags}</strong>
          <p>{product.Tags1}</p>
          </div>

          <div className="description-title">
          <strong>{product.Timings}</strong>
          <p>{product.Timings1}</p>
          </div>

          <div className="description-title">
           <strong>{product.TimeRequired}</strong>
          <p>{product.TimeRequired1}</p>
          </div>

          <div className="description-title">
          <strong>{product.EntryFee}</strong>
          <p>{product.EntryFee1}</p>
          </div>

          <div className="description-title">
          <strong>{product.MetroStation}</strong>
          <p>{product.MetroStation1}</p>
          </div>

          <div className="description-title">
          <strong>{product.Dimensions}</strong>
          <p>{product.Dimensions1}</p>
          </div>

          <div className="description-title">
          <strong>{product.Height}</strong>
          <p>{product.Height1}</p>
          </div>
       </div>
      </div>

  
      
    </div>
  
      {/* <div className="history">
        <h2>{product.heading}</h2>
        <h4>{product.heading1}</h4>
        <p>{product.Peragraph1}</p>
        <h4>{product.heading2}</h4>
        <p>{product.Peragraph2}</p>
      </div> */}

      <Footer/>
    </>
  );
};

export default ProductView;
