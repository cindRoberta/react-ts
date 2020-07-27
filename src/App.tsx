import React from "react";
import "./App.css";

import Teste from "./components/Teste.tsx";
import EstruturasDeControle from "./components/estrutura/EstruturasDeControle.tsx";

const App = () =>
  <span className="App">
    <header className="App-header">
      <EstruturasDeControle />
    </header>
  </span>;

export default App;