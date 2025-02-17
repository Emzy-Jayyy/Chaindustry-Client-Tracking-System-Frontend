// import React from "react";
// import { useContext } from "react";
// // import { useParams } from "react-router-dom";
// import { ProspectContext } from "../../store/prospect-context";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const MapComponent = () => {
// const { prospectData } = useContext(ProspectContext);

//   return (
//     <MapContainer
//       center={[6.5244, 3.3792]} // Default center (Lagos, Nigeria)
//       zoom={6}
//       style={{ height: "300px", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {prospectData.map((prospect, index) => (
//         <Marker key={index} position={[prospect.latitude, prospect.longitude]}>
//           <Popup>
//             <strong>{prospect.name}</strong>
//             <br />
//             {prospect.location}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default MapComponent;


import React, { useState, useEffect, useRef, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ProspectContext } from "../../store/prospect-context";

// Fix missing marker icons in Leaflet
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// Custom icon for markers
const defaultIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = () => {
  const { prospectData } = useContext(ProspectContext);
  const [searchQuery, setSearchQuery] = useState("");
  const mapRef = useRef();

  // Filter prospects based on search query
  const filteredProspects = prospectData.filter(prospect =>
    prospect.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ width: "100%", height: "400px", position: "relative" }}>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search prospect..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "250px",
        }}
      />

      {/* Leaflet Map */}
      <MapContainer
        center={[20, 0]} // Center of the world (adjust as needed)
        zoom={2}
        style={{ width: "100%", height: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Clustered Markers */}
        <MarkerClusterGroup>
          {filteredProspects.map(prospect => (
            <Marker
              key={prospect.key}
              position={[prospect.latitude, prospect.longitude]}
              icon={defaultIcon}
            >
              <Popup>
                <strong>{prospect.name}</strong>
                <br />
                Role: {prospect.role}
                <br />
                <a href={prospect.portfolioLink} target="_blank" rel="noopener noreferrer">
                  View Portfolio
                </a>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
