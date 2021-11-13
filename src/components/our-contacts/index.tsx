import React from "react";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import instagram from "../../assets/images/instagram.png";
import "./styles.scss";

const OurContacts: React.FC = () => {
  const social_media = React.useMemo(() => {
    return [
      { title: "Instagram", img: instagram, link: "" },
      { title: "Linkedin", img: linkedin, link: "" },
      { title: "Facebook", img: facebook, link: "" },
    ];
  }, []);

  return (
    <div id="OurContacts">
      <h1>Nossos contatos</h1>
      <div>
        <section>
          <h3>Entre em contato conosco</h3>
          <p>
            A <strong>HealthDev</strong> é uma empresa que busca satisfazer
            totalmente a necessidade de nossos clientes, acreditamos que seu
            <strong>problema</strong> é nosso problema.
          </p>
          <div className="divider" />
          <h4>NOSSAS REDES</h4>
          <ul>
            {social_media.map((media, index) => (
              <li key={index}>
                <a href={media.link}>
                  <img src={media.img} alt={media.title} />
                  {media.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <form>
          <h3>Envie sua mensagem</h3>
          <input type="text" placeholder="Nome e sobrenome" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Sua mensagem..."></textarea>
          <button>Enviar mensagem</button>
        </form>
      </div>
    </div>
  );
};

export default OurContacts;
