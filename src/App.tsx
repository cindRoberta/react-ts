import React from "react";
import "./App.css";

import Teste from "./components/Teste.tsx";
import GerenciadorContatos from "./components/projetos/ContactManager/GerenciadorContatos.tsx";

import EventHandler from "./components/estrutura/EventHandler.tsx";

import LifeCycle from "./components/estrutura/LifeCycle.tsx";

const App = () =>
  <span className="App">
    <header className="App-header">
      <GerenciadorContatos pessoas={["ffd", "hbdb"]} />
      <EventHandler />
      <LifeCycle aa="çanharol" bb={44} />
    </header>
  </span>;

export default App;