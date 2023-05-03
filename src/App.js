import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./data.js";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React, { useRef, useState } from "react";

const App = () => {
  const mapRef = useRef(null);
  const [showMarker, setShowMarker] = useState(false);
  const [showPolygon, setShowPolygon] = useState(false);
  const [lastSelectedItem, setLastSelectedItem] = useState(null);

  const items = [
    {
      id: 1,
      name: "sisterHome",
      markerCoords: [40.591977, 49.68334],
      polygonCoords: [
        [40.591407, 49.683138],
        [40.591631, 49.683748],
        [40.591827, 49.684153],
        [40.592208, 49.683865],
        [40.592549, 49.683675],
        [40.592368, 49.683128],
        [40.592159, 49.682646],
      ],
    },
    {
      id: 2,
      name: "Home",
      markerCoords: [40.568966131324416, 49.6900677685897],
      polygonCoords: [
        [40.568638095224784, 49.69066965536853],
        [40.569153781403486, 49.69114784370572],
        [40.56946696596487, 49.69020579232813],
        [40.569055624402345, 49.68983678264626],
        [40.56882894030296, 49.69013464947294],
      ],
    },
  ];
  const center = [40.582846114256, 49.6807226204748];
  const handleListItemClick = (item) => {
    if (mapRef.current) {
   
      mapRef.current.flyTo(item.markerCoords, 18);
      setShowMarker(true);
      setShowPolygon(true);

     
      if (lastSelectedItem && lastSelectedItem.id !== item.id) {
        setShowMarker(false);
        setShowPolygon(false);
      }

      setLastSelectedItem(item);
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div style={{ width: "100%" }}>
      <MapContainer
        center={center}
        zoom={15}
        ref={mapRef}
        style={{ width: "100%", height: "100vh" }}
      >
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
            pathOptions={{ color: "purple" }}
            positions={lastSelectedItem.polygonCoords}
          />
        )}
      </MapContainer>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="OUR HOMES" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {items.map((item) => (
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleListItemClick(item)}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default App;
