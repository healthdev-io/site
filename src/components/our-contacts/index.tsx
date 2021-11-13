import React, { FormEvent } from "react";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import instagram from "../../assets/images/instagram.png";
import "./styles.scss";

const OurContacts: React.FC = () => {
  const [mail, setMail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");

  const social_media = React.useMemo(() => {
    return [
      {
        title: "Instagram",
        img: instagram,
        link: "https://www.instagram.com/healthdev.io/",
      },
      {
        title: "Linkedin",
        img: linkedin,
        link: "https://www.linkedin.com/company/healthdev",
      },
      {
        title: "Facebook",
        img: facebook,
        link: "https://www.facebook.com/healthdev.io/",
      },
    ];
  }, []);

  const handleSubmit = React.useCallback((e: FormEvent) => {
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=5585999547116&text=Ol%C3%A1,%20me%20chamo%20${name}%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20e%20servi%C3%A7os%20da%20healthDev.%20Email%20para%20contato:%20${mail}%7D.%20${message}`,
      "blank"
    );
  }, [mail, message, name]);

  return (
    <div id="OurContacts">
      <h2>Nossos contatos</h2>
      <div>
        <section>
          <h3>Entre em contato conosco</h3>
          <p>
            A <strong>HealthDev</strong> é uma empresa que busca satisfazer
            totalmente a necessidade de nossos clientes, acreditamos que seu
            <strong> problema </strong> é nosso problema.
          </p>
          <div className="divider" />
          <h4>NOSSAS REDES</h4>
          <ul>
            {social_media.map((media, index) => (
              <li key={index}>
                <a href={media.link} target="blank">
                  <img src={media.img} alt={media.title} />
                  {media.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <form onSubmit={handleSubmit}>
          <h3>Envie sua mensagem</h3>
          <input
            type="text"
            name="name"
            placeholder="Nome e sobrenome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="mail"
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <textarea
            placeholder="Sua mensagem..."
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button>Enviar mensagem</button>
        </form>
      </div>
    </div>
  );
};

export default OurContacts;
