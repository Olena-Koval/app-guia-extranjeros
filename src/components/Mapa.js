// src/components/Mapa.js
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Necesario para los estilos de Leaflet

const Mapa = () => {
  const mapContainer = useRef(null);

  // Datos de las ubicaciones (nombre, latitud, longitud, información)
  const locations = [
    {
      name: "Oficina de Registro Plaza del Pilar",
      lat: 41.6543,
      lng: -0.8776,
      info: "Oficina de Registro en Plaza del Pilar, Zaragoza",
    },
    {
      name: "Centro de Salud Zaragoza",
      lat: 41.648,
      lng: -0.883,
      info: "Centro de salud en Zaragoza",
    },
    {
      name: "Albergue Municipal Zaragoza",
      lat: 41.652,
      lng: -0.8817,
      info: "Albergue Municipal en Zaragoza",
    },
    {
      name: "Viviendas Sociales Zaragoza",
      lat: 41.6512,
      lng: -0.877,
      info: "Viviendas Sociales en Zaragoza",
    },
    {
      name: "Instituto Aragonés de Servicios Sociales",
      lat: 41.6463,
      lng: -0.8797,
      info: "Instituto Aragonés de Servicios Sociales en Zaragoza",
    },
    {
      name: "Oficina de Extranjería Zaragoza",
      lat: 41.649,
      lng: -0.8885,
      info: "Oficina de Extranjería en Zaragoza",
    },
    {
      name: "Oficina INAEM Zaragoza",
      lat: 41.6481,
      lng: -0.8854,
      info: "Oficina INAEM en Zaragoza",
    },
    {
      name: "INSS Zaragoza",
      lat: 41.652,
      lng: -0.8895,
      info: "Instituto Nacional de la Seguridad Social en Zaragoza",
    },
  ];

  useEffect(() => {
    // Inicializa el mapa con Leaflet
    const map = L.map(mapContainer.current).setView([41.648, -0.8893], 13); // Coordenadas de Zaragoza

    // Añadir el mapa de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Añadir marcadores para cada ubicación
    locations.forEach((location) => {
      L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(
          `<b>${location.name}</b><br>${location.info}` // Información que se mostrará en el popup
        ); // Ventana emergente con la información
    });

    // Limpiar el mapa al desmontar el componente
    return () => {
      map.remove();
    };
  }, [locations]);

  return (
    <div ref={mapContainer} style={{ width: "100%", height: "500px" }}></div> // Estilo del mapa
  );
};

export default Mapa;
