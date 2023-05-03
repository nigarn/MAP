import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polygon, Popup } from 'react-leaflet';


function Map() {
  const mapRef = useRef(null);
  const [showMarker, setShowMarker] = useState(false);
  const [showPolygon, setShowPolygon] = useState(false);
  const [lastSelectedItem, setLastSelectedItem] = useState(null);

  const items = [
    { id: 1, name: 'Item 1', markerCoords: [51.505, -0.09], polygonCoords: [[51.505, -0.09], [51.51, -0.1], [51.52, -0.12]] },
    { id: 2, name: 'Item 2', markerCoords: [52.505, -0.09], polygonCoords: [[52.505, -0.09], [52.51, -0.1], [52.52, -0.12]] },
    { id: 3, name: 'Item 3', markerCoords: [53.505, -0.09], polygonCoords: [[53.505, -0.09], [53.51, -0.1], [53.52, -0.12]] },
  ];
  const center = [40.582846114256, 49.6807226204748];
  const handleListItemClick = (item) => {
    if (mapRef.current) {
      // Replace the coordinates with the ones you want to zoom to
      mapRef.current.flyTo(item.markerCoords, 13);
      setShowMarker(true);
      setShowPolygon(true);

      // Hide the marker and polygon from the previous item click
      if (lastSelectedItem && lastSelectedItem.id !== item.id) {
        setShowMarker(false);
        setShowPolygon(false);
      }

      setLastSelectedItem(item);
    }
  };

  return (
    <>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => handleListItemClick(item)}>{item.name}</li>
        ))}
      </ul>
      <MapContainer center={center} zoom={13} ref={mapRef} style={{width:'100%', height:'100vh'}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {showMarker && (
          <Marker position={lastSelectedItem.markerCoords}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
        {showPolygon && (
          <Polygon
            pathOptions={{ color: 'purple' }}
            positions={lastSelectedItem.polygonCoords}
          />
        )}
      </MapContainer>
    </>
  );
}

export default Map;
