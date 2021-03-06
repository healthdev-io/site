import React from "react";
import pep from "../../assets/images/pep.png";
import telemedicine from "../../assets/images/telemedicine.png";
import integrations from "../../assets/images/integrations.png";
import "./styles.scss";

const OurServices: React.FC = () => {
  const services = React.useMemo(() => {
    return [
      {
        title: "Prontuário eletrônico",
        img: pep,
        description:
          "Ferramenta de alta tecnologia para atendimento médico totalmente digitale eficiente.",
      },
      {
        title: "Telemedicina",
        img: telemedicine,
        description:
          "Trabalhamos com as mais modernas tecnologias para entregar um serviço de atendimento médico por vídeo.",
      },
      {
        title: "Integrações",
        img: integrations,
        description:
          "Integre todos os seus sistemas com softwares modernos e de fácil acesso e usabilidade.",
      },
    ];
  }, []);

  const handleContact = React.useCallback(() => {
    window.open(
      "https://api.whatsapp.com/send?phone=5585999547116&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20melhor%20as%20solu%C3%A7%C3%B5es%20da%20healthdev",
      "blank"
    );
  }, [])

  return (
    <div id="OurServices">
      <h2>Nossos serviços</h2>
      <p>
        Somos especialistas em integrações com{" "}
        <strong>softwares médicos</strong>,<br />
        <strong>prontuários eletrônicos</strong>, sistemas de regulação,
        <strong> telemedicina</strong> e muito mais.
      </p>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
      <div className="banner">
        <h1>Sua clínica mais eficiente!</h1>
        <p>
          Não deixe de entrar em contato conosco, <br /> aqui nós desenvolvemos
          saúde.
        </p>
        <button onClick={handleContact}>Entrar em contato</button>
      </div>
    </div>
  );
};

export default OurServices;
