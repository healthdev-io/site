import React from "react";
import logo from "../../assets/images/logo.png";
import "./styles.scss";

const Header: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li>
            <a href="#Home">Tela inicial</a>
          </li>
          <li>
            <a href="#AboutUs">Sobre nós</a>
          </li>
          <li>
            <a href="#OurServices">Nossos serviços</a>
          </li>
          <li>
            <a href="#OurContacts">Nossos contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
