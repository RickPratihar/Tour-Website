import React from 'react'
import './Star.css'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from "react-icons/ai";

const Star = ({stars, review }) =>{
     
  const reatingStar =  Array.from({length:5}, (elm, index) =>{
        let number = index + 0.5;
        return(
            <span key={index}>
                {
                    stars > index +1 ? (<FaStar className='icon-star'/> ): stars > number ? (<FaStarHalfAlt className='icon-star'/>) : (<AiOutlineStar className='icon-star'/>)
                }
            </span>
        )
    })
    return (
            <div className='icon-style'>
                {reatingStar}
                <p>({review})</p>
            </div>
           
    )
}


 

export default Star