import React from 'react';
import './tag.css';

export default function tag({texte, url}) {

    if (!url) {
        url = '/404';
        return (
            <a href={url} className='btnTag'>{texte}</a>
        )
    }

  return (
    <>
        <a href={url} className='btnTag'>{texte}</a>
    </>
  )
}
