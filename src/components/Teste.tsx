import React, { useState, useEffect } from "react";

/*const Teste = () =>
  <span>
    fixo
    { false ? <h1>verdade</h1> :
      true ? <h3><i>else</i> if</h3> :
      <h2>mentira</h2>
    }
    { Array(3).fill(<p>paragrafo</p>) }
  </span>;*/

const Teste = () => {
  const [counter, setCounter] = useState(0);

  // componentDidMount, componentDidUpdate
  //useEffect(() => console.log(`clicou ${counter} vezes`))

  // componentDidMount
  //useEffect(() => console.log(`clicou ${counter} vezes`), []);

  // componentDidUpdate
  useEffect(() => console(`clicou ${counter} vezes`), [counter]);

  return (
    <span>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>botao</button>
    </span>
  );
}

export default Teste;