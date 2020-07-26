import React from "react";

const Teste = () =>
  <span>
    fixo
    { false ? <h1>verdade</h1> :
      true ? <h3><i>else</i> if</h3> :
      <h2>mentira</h2>
    }
    { Array(3).fill(<p>paragrafo</p>) }
  </span>;

export default Teste;