import React from 'react'

const RatingStar = ({rating}) => {
    const stars =[];
    for (let index = 1; index <= 5; index++) {
     stars.push(
        <span key={index} className={`ri-star${index<=rating ?'-fill':'-line'}`}> </span>
     )
        
    }
  return (
    <div className='product__rating'>{stars}</div>
  )
}


export default RatingStar