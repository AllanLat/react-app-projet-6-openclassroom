import React from 'react'
import Banner from '../../components/banner/banner';
import Grid from '../../components/grid/grid';
import './home.css';

export default function Home() {
  return (
    <div id='home'>
      <Banner texte={'Chez vous, partout et ailleurs'} image={'image1.png'}/>
      <Grid/>  
    </div>
  )
}
