import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import mapMarkerImg from "../assets/images/map-marker.svg";

import MapIcon from "../utils/mapIcon";
import api from "../services/api";

import "../styles/pages/orphanages-map.css";
import { motion } from "framer-motion";

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    async function handleSeekOrphanages() {
      const { data } = await api.get<Orphanage[]>("orphanages");
      setOrphanages(data);
    }

    handleSeekOrphanages();
  }, []);

  return (
    <div id="page-map">
      <aside>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -300 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <header>
            <img src={mapMarkerImg} alt="Happy" />

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita {":)"}</p>
          </header>

          <footer>
            <strong>Osasco</strong>
            <p>São paulo</p>
          </footer>
        </motion.div>
      </aside>
      <Map
        center={[-23.5760669, -46.7963186]}
        zoom={15.12}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages?.map((orphanage) => (
          <Marker
            icon={MapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
            key={orphanage.id}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="white" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to="orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="white" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
