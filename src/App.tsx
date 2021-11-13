import React from "react";
import AboutUs from "./components/about-us";
import Header from "./components/header";
import Home from "./components/home";
import "./theme/styles/global.scss";

const App: React.FC = () => {
  return (
    <main id="Layout">
      <Header />
      <Home />
      <AboutUs />
    </main>
  );
};

export default App;
