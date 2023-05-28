import React from 'react';
import './erreur.css' ;

export default function erreur({type, message}) {
  return (
    <div className="erreur">
        <p className='erreurNumber'>{type}</p>
        <p className='erreurMessage'>{message}</p>
        <p className='erreurButton'> <a href="/" className="returnHome">Retourner sur la page d'accueil</a></p>
    </div>
  )
}
