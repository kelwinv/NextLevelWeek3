import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from "../assets/images/map-marker.svg";

import '../styles/components/sideBar.css';

const SideBar: React.FC = () => {
  const { goBack } = useHistory();
  return( 
    <aside className="app-sideBar">
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
  )
};

export default SideBar;