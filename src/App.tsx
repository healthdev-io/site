import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import "./theme/styles/global.scss";

const App: React.FC = () => {
  return (
    <main id="Layout">
      <Header />
      <Home />
    </main>
  );
};

export default App;
