import React from "react";
import logo from "../../assets/images/logo.png";
import "./styles.scss";

const Header: React.FC = () => {
  const data = React.useMemo(() => {
    return [
      {
        id: "HomeLink",
        title: "Tela inicial",
        href: "#Home",
      },
      {
        id: "AboutLink",
        title: "Sobre nós",
        href: "#AboutUs",
      },
      {
        id: "OurServicesLink",
        title: "Nossos serviços",
        href: "#OurServices",
      },
      {
        id: "OurContacts",
        title: "Nossos contatos",
        href: "#OurContacts",
      },
    ];
  }, []);

  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <a
                id={item.id}
                href={item.href}
                className={
                  document.activeElement === document.getElementById(item.id)
                    ? "active"
                    : ""
                }
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
