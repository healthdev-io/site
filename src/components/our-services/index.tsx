import React from "react";
import pep from "../../assets/images/pep.png";
import telemedicine from "../../assets/images/telemedicine.png";
import integrations from "../../assets/images/integrations.png";
import banner from "../../assets/images/banner.png";

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

  return (
    <div id="OurServices">
      <h1>Nossos serviços</h1>
      <p>
        Somos especialistas em integrações com{" "}
        <strong>softwares médicos</strong>,{" "}
        <strong>prontuários eletrônicos</strong>, sistemas de regulação,
        <strong>telemedicina</strong> e muito mais.
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
        <p>Não deixe de entrar em contato conosco, aqui nós desenvolvemos saúde.</p>
        <button>Entrar em contato</button>
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
};

export default OurServices;
