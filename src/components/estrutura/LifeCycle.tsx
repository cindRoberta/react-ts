import React, { useState, useEffect } from "react";

const LifeCycle = () => {
  const [counter, setCounter] = useState(0);

  // componentDidMount, componentDidUpdate
  //useEffect(() => console.log(`clicou ${counter} vezes`))

  // componentDidMount
  //useEffect(() => console.log(`clicou ${counter} vezes`), []);

  // componentDidUpdate(specific)
  useEffect(() => console.log(`clicou ${counter} vezes`), [counter]);

  return (
    <span>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>botao</button>
    </span>
  );
}

export default LifeCycle;