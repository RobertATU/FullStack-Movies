import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useContext } from "react";
import GlobalContext from "../../pages/store/globalContext";

mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9iZXJ0bXVsZG9vbmZ5cCIsImEiOiJjbHBlajVqejIxZDc5MmhybGZha3N3dGF3In0.EmdczNp0fNiA_es8l1-y9Q";
function Map(props) {
  const [map, setMap] = useState(null);
  console.log(props.props.lat);
  let pins = props.props;

  useEffect(() => {
    console.log(pins);
    const initializeMap = () => {
      const mapInst = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [pins.long, pins.lat],
        zoom: 9,
      });
      setMap(mapInst);
    };
    if (!map) {
      initializeMap();
    }
  }, [map]);

  if (map) {
    const pin = new mapboxgl.Marker()
      .setLngLat([pins.long, pins.lat])
      .addTo(map);

    pin.setPopup(new mapboxgl.Popup().setHTML(`<h3>${pins.title}</h3>`));
    pin.getElement().addEventListener("click", () => {
      pin.togglePopup();
    });
  }

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "800px" }}></div>
    </div>
  );
}

export default Map;
