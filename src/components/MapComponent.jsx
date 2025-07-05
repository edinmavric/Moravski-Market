import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';


const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
});
L.Marker.prototype.options.icon = defaultIcon;


const cacakCenter = [43.8914, 20.3497];

const MapComponent = () => {
  return (
    <MapContainer center={cacakCenter} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={cacakCenter}>
        <Popup>
          Ovo je centar Čačka.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
