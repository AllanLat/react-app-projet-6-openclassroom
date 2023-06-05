import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import F404 from '../../pages/404/404';

import Carousel from '../../components/carousel/carousel';
import Tags from '../../components/tagManager/tagManager';
import Host from '../../components/hostBlock/host';
import Collapse from '../../components/collaspe/collapse';
import Ratings from '../../components/ratings/ratings';

import './logement.css';

function Logement() {
    const [logement, setLogement] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      const fetchLogement = async () => {
        const response = await fetch(`http://localhost:3000/data/data.json`);
        const data = await response.json();
        const logement = data.find(logement => logement.id === id);
        setLogement(logement);
      };
  
      fetchLogement();
    }, [id]);
    
    //Si le logement n'est pas trouvé, affficher //Metre le return de redirection.
    if (!logement) {
      return <F404 />;
    }
  
    return (
      <div>
        <Carousel images={logement.pictures}/>

        <div className="infos-logement">
            <div className="title-block">
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
                <Tags tags={logement.tags}/>
            </div>
            <div className='infos-host'>
                <Host host={logement.host}/>
                <Ratings rating={logement.rating} />
            </div>
            
        </div>

        <div className='collapse-parent'>
            <div className='collapse-block'>
                <Collapse title={'Description'}>
                    <p>{logement.description}</p>
                </Collapse>
            </div>
            <div className='collapse-block'>
                <Collapse title={'Équipements'}>
                    <ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default Logement;



