
import PostGrid from '../post_grid/postGrid';
import './grid.css';
import React, { useState, useEffect } from 'react';

export default function Grid() {

    // appel fichier data/data.json pour récupérer les données

    // Création d'une boucle pour afficher les données du fichier data.json
        // pour chaque item du fichier data.json appeler le composant postGridItem et le stocker dans un tableau 

    //Afficher les données dans le résultat
  
    const [donnees, setDonnees] = useState([]);

    async function fetchDonnees() {
      try {
        const response = await fetch('http://localhost:3000/data/data.json');
        const data = await response.json();
        setDonnees(data);
        
      } catch (error) {
        console.log('Aie')
      }
    }
  

    useEffect(() => {
      fetchDonnees();
    }, []);
  
    return (
      <div className='parentGrid'>
        {console.log(donnees)}
        {donnees.map(donnees => (
          <PostGrid key={donnees.id} text={donnees.title} img={donnees.cover} url={`/logement/${donnees.id}`}/>
        ))}
      </div>
    );
  }
