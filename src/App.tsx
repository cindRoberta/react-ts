import React from "react";
import "./App.css";

import Teste from "./components/Teste.tsx";
import GerenciadorContatos from "./components/GerenciadorContatos.tsx";

const App = () =>
  <span className="App">
    <header className="App-header">
      <GerenciadorContatos pessoas={["ffd", "hbdb"]} />
    </header>
  </span>;

export default App;