"use client";

import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"; // Import the CSS for directions

function MapboxMap() {
  const mapNode = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<mapboxgl.Map | null>(null);

  React.useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [37.621168, 55.754298],
      zoom: 11,
    });

    // Add zoom and rotation controls to the map
    mapboxMap.addControl(new mapboxgl.NavigationControl());

    // Add directions control to the map
    const directions = new MapboxDirections({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      unit: "metric", // Use 'imperial' for miles
      profile: "mapbox/driving", // Can be 'mapbox/walking', 'mapbox/cycling'
    });

    mapboxMap.addControl(directions, "top-left"); // Position the directions control on the map
    new mapboxgl.Marker({ color: "red" }) // You can customize the color and other properties
      .setLngLat([37.621168, 55.754298]) // Set the marker position [longitude, latitude]
      .addTo(mapboxMap); // Add the marker to the map

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} style={{ width: "100%", height: "100%" }} />;
}

export default MapboxMap;
