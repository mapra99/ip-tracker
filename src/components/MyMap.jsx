// library dependencies
import React, { useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

// assets
import '../assets/styles/components/Map.scss';
import 'leaflet/dist/leaflet.css';

const MyMap = ({lat, lng}) => {
  const location = [lat, lng];
  return (
    <Map center={location} zoom={12}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </Map>
  );
};

MyMap.defaultProps = {
  lat: 4.609,
  lng: -74.081,
};

export default MyMap;
