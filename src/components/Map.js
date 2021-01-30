import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = ({ ipInfo }) => {
  useEffect(() => {
    const drawMap = ({ lat, lng }) => {
      map.setView([lat, lng]);
      L.tileLayer(
        `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_KEY}`,
        {
          attribution: "",
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: process.env.REACT_APP_MAPBOX_KEY,
        }
      ).addTo(map);
      const icon = L.icon({
        iconUrl: "./images/icon-location.svg",
      });
      L.marker([lat, lng], { icon }).addTo(map);
    };
    const map = L.map("map", {
      zoomControl: false,
      zoom: 13,
    });
    drawMap(ipInfo.location);
    return () => {
      map.remove();
    };
  }, [ipInfo]);
  return <div id="map"></div>;
};

export default Map;
