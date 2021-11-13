import React from "react";
import aboutUs from "../../assets/images/about-us.png";
import projectManager from "../../assets/images/project-manager.png";
import developer from "../../assets/images/developer.png";
import designer from "../../assets/images/designer.png";
import "./styles.scss";

const AboutUs: React.FC = () => {
  const professionals = React.useMemo(() => {
    return [
      { title: "Gerentes de projeto", img: projectManager },
      { title: "Desenvolvedores", img: developer },
      { title: "Designers", img: designer },
    ];
  }, []);

  return (
    <div id="AboutUs">
      <h2>Sobre nós</h2>
      <section>
        <img src={aboutUs} alt="AboutUs" />
        <h3>Nossa equipe</h3>
        <p>
          Contamos com profissionais especialistas nas tecnologias mais modernas
          e eficientes do mercado, a fim de entregar um <strong>produto</strong>{" "}
          com <strong>qualidade</strong> e <strong>excelência</strong>.
        </p>
      </section>
      <section>
        <h3>Quem somos?</h3>
        <p>
          A HealthDev é especialista em Desenvolvimento de Sistemas de registros
          de Saúde e Interoperabilidade.
        </p>
        <p>
          Somos uma healthtech nascida com o propósito de facilitar o acesso à
          saúde de todos. Queremos fazer isso através de nossas plataformas de
          registro e atendimento do Paciente que combinam{" "}
          <strong>tecnologia de ponta</strong>,
          <strong>Telemedicina e Integração</strong> à outros sistemas.
        </p>
        <ul>
          {professionals.map((professional, index) => (
            <li key={index}>
              <img src={professional.img} alt={professional.title} />
              <strong>{professional.title}</strong>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
