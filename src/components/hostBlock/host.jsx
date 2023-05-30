import React from 'react'
import './host.css'

export default function host({host}) {

  return (
    <div className="host-block">
        <div className="col-6">
            <p>{host.name}</p>
        </div>
        <div className="col-6">
            <img src={host.picture} alt="" />
        </div>
        
    </div>
    
  )
}
