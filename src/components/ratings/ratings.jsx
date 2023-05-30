import React from 'react'
import './ratings.css'

export default function Ratings({ rating, className }) {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const emptyStars = totalStars - fullStars ;
  
    const fullStarIcon = <span className="fa fa-star"></span>;
    const emptyStarIcon = <span className="fa fa-star fa-star-o"></span>;
  
    return (
        <div className={`star-rating ${className}`}>
          {[...Array(fullStars)].map((x, i) => (
            <span key={i}>{fullStarIcon}</span>
          ))}
          {[...Array(emptyStars)].map((x, i) => (
            <span key={i}>{emptyStarIcon}</span>
          ))}
        </div>
      );
  }
  