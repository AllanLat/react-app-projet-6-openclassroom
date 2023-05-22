import React from 'react';
import './banner.css';

export default function banner({texte , image}) {

  return (
    <div>
        <div className='banner' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/${image})`}}>
          
                <h1>{texte}</h1>
          
           
        </div>
    </div>
    
  )
}
