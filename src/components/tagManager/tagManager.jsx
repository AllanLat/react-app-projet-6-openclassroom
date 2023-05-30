import React from 'react'
import Tag from '../tag/tag';
import './tagmanager.css';


export default function tagManager({tags}) {

  return (
    <ul className='tagManager'>
        {tags.map((tag, index) => (
            <li><Tag key={index} texte={tag} /></li>
        ))}
      </ul>
  )
}
