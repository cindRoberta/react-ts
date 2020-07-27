import React from "react";

const EstruturasDeControle = () => {
  let arr: Array<string> = ["moto", "carro", "avião", "fogete"];

  return (
    <span>
      { false ? <h1>verdade</h1> :
        true ? <h3><i>else</i> if</h3> :
        <h2>mentira</h2>
      }

      { Array(3).fill(<p>paragrafo</p>) }

      { arr.map((el, i) => <p key={i}>{el}</p>) }
    </span>);
};

export default EstruturasDeControle;