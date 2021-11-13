import React from "react";
import logoWhite from '../../assets/images/healthdev-white.png';
import "./styles.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <img src={logoWhite} alt="Logo" />
      <p className="copy">
        COPYRIGHT © 2021 HEALTHDEV – TODOS OS DIREITOS RESERVADOS.
      </p>
      <p>DESENVOLVIDO POR HEALTHDEV</p>
    </footer>
  );
};

export default Footer;
