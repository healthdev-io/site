import React from "react";
import doctor from "../../assets/images/doctor.png";
import "./styles.scss";

const Home: React.FC = () => {
  return (
    <div id="Home">
      <div>
        <h1>
          Tecnologia, <br /> eficiência e <strong>saúde</strong>
        </h1>
      </div>
      <img src={doctor} alt="Doctor" />
    </div>
  );
};

export default Home;
