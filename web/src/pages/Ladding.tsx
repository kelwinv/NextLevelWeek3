import React from "react";
import { useHistory } from "react-router-dom";

import { motion, useMotionValue } from "framer-motion";

import { FiArrowLeft } from "react-icons/fi";

import "../styles/pages/landing.css";

import logoImg from "../assets/images/Logo.svg";

const Ladding: React.FC = () => {
  const history = useHistory();
  const x = useMotionValue(1);

  x.onChange((positionX) => {
    const xScroll = -window.innerHeight - positionX + 100;
    if (xScroll > 0) {
      history.push("/app");
    }
  });

  return (
    <div id="page-landing">
      <motion.div
        drag="x"
        className="motionContainer"
        style={{ x }}
        dragConstraints={{ right: 0 }}
      >
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy" />

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>

          <div className="location">
            <strong>Osasco</strong>
            <span>São paulo</span>
          </div>
          <div className="enter-app">
            <FiArrowLeft size={26} color="rgba(0,0,0,0.6" />
            <p>arraste para ver mais</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Ladding;

{
  /*<Link to="/app" className="enter-app">
    <FiArrowRight size={26} color="rgba(0,0,0,0.6" />
  </Link> */
}
