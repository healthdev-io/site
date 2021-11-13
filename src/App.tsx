import React from "react";
import AboutUs from "./components/about-us";
import Header from "./components/header";
import Home from "./components/home";
import OurServices from "./components/our-services";
import "./theme/styles/global.scss";

const App: React.FC = () => {
  return (
    <main id="Layout">
      <Header />
      <Home />
      <AboutUs />
      <OurServices />
    </main>
  );
};

export default App;
