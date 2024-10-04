import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

interface MapProps {
  center: [number, number];
  zoom: number;
}

const OpenMaps: React.FC<MapProps> = ({ center, zoom }) => {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Buat peta baru hanya jika mapRef belum diinisialisasi
      mapRef.current = new Map({
        target: mapElement.current as HTMLDivElement,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat(center),
          zoom: zoom,
        }),
      });
    }
  }, [zoom, center]);

  // Mengubah center peta saat properti center berubah
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.getView().setCenter(fromLonLat(center));
    }
  }, [center]);

  return <div ref={mapElement} className="w-full h-full" />;
};

export default OpenMaps;
