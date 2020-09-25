// library dependencies
import React from 'react';

// assets
import mapImg from '../assets/static/images/placehodler-map.jpg';
import '../assets/styles/components/Map.scss';

const Map = () => (
  <div className='map-wrap'>
    <img className='map-img' src={mapImg} alt='placeholder map' />
  </div>
);

export default Map;
