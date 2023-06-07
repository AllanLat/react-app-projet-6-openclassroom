import React from 'react'
import Tag from '../tag/tag';
import './tagmanager.css';


export default function tagManager({tags}) {

  return (
    <ul className='tagManager'>
        {tags.map((tag) => (
            <li key={tag}><Tag  texte={tag} /></li>
        ))}
      </ul>
  )
}
