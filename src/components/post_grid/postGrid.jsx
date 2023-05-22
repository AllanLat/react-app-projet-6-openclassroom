import React from 'react';
import './postGrid.css';

export default function postGrid({text, img, url}) {
  return (
    <>
        <a href={url} className='postLink' >
            <div className="thumbnail" style={{ backgroundImage: `url(${img})` }}>
                
                    <div className="contentThumbnail">
                        <h3>{text}</h3>
                    </div>
                
            </div>
        </a>
    </>
  )
}
