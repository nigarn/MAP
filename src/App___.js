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

function App() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const center = [40.582846114256, 49.6807226204748];
  // const allHomes = [
  //   {
  //     id: 1,
  //     name: "sisterHome",
  //     markerCoords: [40.591977, 49.68334],
  //     polygonCoords: [
  //       [40.591407, 49.683138],
  //       [40.591631, 49.683748],
  //       [40.591827, 49.684153],
  //       [40.592208, 49.683865],
  //       [40.592549, 49.683675],
  //       [40.592368, 49.683128],
  //       [40.592159, 49.682646],
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Home",
  //     markerCoords: [40.568966131324416, 49.6900677685897],
  //     polygonCoords: [
  //       [40.568638095224784, 49.69066965536853],
  //       [40.569153781403486, 49.69114784370572],
  //       [40.56946696596487, 49.69020579232813],
  //       [40.569055624402345, 49.68983678264626],
  //       [40.56882894030296, 49.69013464947294],
  //     ],
  //   },
  // ];
  const sisterHome = [40.591977, 49.68334];
  const home = [40.568966131324416, 49.6900677685897];
  const polygon = [
    [40.591407, 49.683138],
    [40.591631, 49.683748],
    [40.591827, 49.684153],
    [40.592208, 49.683865],
    [40.592549, 49.683675],
    [40.592368, 49.683128],
    [40.592159, 49.682646],
  ];
  const homePolygon = [
    [40.568638095224784, 49.69066965536853],
    [40.569153781403486, 49.69114784370572],
    [40.56946696596487, 49.69020579232813],
    [40.569055624402345, 49.68983678264626],
    [40.56882894030296, 49.69013464947294],
  ];
  // const route = [
  //   [40.59175276361668, 49.68289095049891],
  //   [40.59201630914881, 49.68267198717846],
  //   [40.59201896061936, 49.68236285509534],
  //   [40.59201609478823, 49.68235905922055],
  //   [40.59170823834068, 49.681689135254736],
  //   [40.59172225591614, 49.68159855275144],
  //   [40.59160010453926, 49.68124893518243],
  //   [40.59109277812027, 49.681634229764626],
  //   [40.590412455756876, 49.682105583108545],
  //   [40.59034217502847, 49.68204916919753],
  //   [40.5893026315317, 49.682782315556196],
  //   [40.58888016217313, 49.68316765302973],
  //   [40.588202020479514, 49.68363386182917],
  //   [40.58809606101431, 49.68363009650014],
  //   [40.58716825251096, 49.68446173619772],
  //   [40.586727049961596, 49.68476125632689], //ulduz
  //   [40.586606341324696, 49.68453001440497],
  //   [40.586203343716164, 49.68474606221062],
  //   [40.585203337110244, 49.685511374027605],
  //   [40.583673504808104, 49.68659091111262],
  //   [40.58209901561204, 49.68770728704642], //4qardash
  //   [40.581916489957734, 49.68755802134902],
  //   [40.58180361934677, 49.687543296547375],
  //   [40.58176764034461, 49.68770719582218],
  //   [40.58143314724413, 49.68779022046717],
  //   [40.58123008626928, 49.68802395804546],
  //   [40.58095602219266, 49.68859307261614],
  //   [40.58063499826913, 49.689130585733835],
  //   [40.57996413026457, 49.688434654988356], // gulshengil
  //   [40.57975033200237, 49.688173628523856],
  //   [40.579668869023564, 49.68808088190542],
  //   [40.579525488709514, 49.68818421785337],
  //   [40.57927312206367, 49.68820572491843],
  //   [40.57876949977728, 49.68814504075545],
  //   [40.57844969882703, 49.68796254813815],
  //   [40.578153166204046, 49.687623892019396],
  //   [40.57794582456619, 49.68750875752247],
  //   [40.57775755383109, 49.68732913643468],
  //   [40.57758598321518, 49.68754785667844], //yap
  //   [40.57732188759631, 49.68796350217027],
  //   [40.57691637197827, 49.68752280765551],
  //   [40.57674797993872, 49.68735075652719],
  //   [40.57420625225779, 49.691937915216734], //fun world
  //   [40.573638856437825, 49.6924480863652],
  //   [40.573560868189794, 49.69257720360263],
  //   [40.5732792544638, 49.692602210156544],
  //   [40.57317004238411, 49.692742431215976],
  //   [40.570254374981, 49.68976168458368],
  //   [40.569573046837974, 49.68906912639435],
  //   [40.568966131324416, 49.6900677685897], //teze ev
  // ];

  const mapRef = useRef(null);
  const [showMarker, setShowMarker] = useState(false);
  const [showPolygon, setShowPolygon] = useState(false);



  const SisterClick = () => {
    if (mapRef.current) {
      // Replace the coordinates with the ones you want to zoom to
      mapRef.current.flyTo(sisterHome, 18);
      setShowMarker(true);
      setShowPolygon(true);
    }
  };
  const HomeClick = () => {
    if (mapRef.current) {
      // Replace the coordinates with the ones you want to zoom to
      mapRef.current.flyTo(home, 18);
      setShowMarker(true);
      setShowPolygon(true);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <MapContainer
        center={center}
        zoom={14}
        style={{ height: "80vh" }}
        scrollWheelZoom={false}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
   

        {showMarker && (
          <Marker
            position={sisterHome}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>Sister's Home</Popup>
          </Marker>
        )}
        {showPolygon && (
          <Polygon
            pathOptions={{ color: "red", weight: "7" }}
            positions={polygon}
          />
        )}
        {showMarker && (
          <Marker
            position={home}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>Our Home</Popup>
          </Marker>
        )}
        {showPolygon && (
          <Polygon
            pathOptions={{ color: "blue", weight: "7" }}
            positions={homePolygon}
          />
        )}
        {/*<Polyline
        pathOptions={{ color: "lime", weight: "10" }}
        positions={route}
        />*/}
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
            
              <ListItemButton sx={{ pl: 4 }} onClick={HomeClick}>
                <ListItemText primary={'Home'} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={SisterClick}>
              <ListItemText primary={'Sister Home'} />
            </ListItemButton>
          
          </List>
        </Collapse>
      </List>
      
    </div>
  );
}

export default App;
